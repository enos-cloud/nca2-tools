#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import json
import math
import re
from pathlib import Path
from urllib.parse import parse_qs, urlparse

import requests

try:
    from pypinyin import Style, lazy_pinyin
except ImportError:  # pragma: no cover
    Style = None
    lazy_pinyin = None


SEARCH_API = "https://tw.ncsoft.com/aion2_tw/v2.0/dict/search/item"
DEFAULT_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
    "Referer": "https://tw.ncsoft.com/aion2/info/item",
    "Accept": "application/json, text/plain, */*",
}


def parse_source_url(source_url: str, page_number: int, page_size: int) -> dict[str, str]:
    parsed = urlparse(source_url)
    query = parse_qs(parsed.query)

    def first(name: str, default: str = "") -> str:
        value = query.get(name, [default])[0]
        return value if value is not None else default

    params: dict[str, str] = {
        "size": str(page_size),
        "locale": "zh-TW",
        "page": str(page_number),
    }

    grade = first("grade")
    if grade:
        params["grades"] = grade

    class_value = first("class")
    if class_value:
        params["classes"] = class_value

    for source_name, target_name in (
        ("category1", "category1"),
        ("category2", "category2"),
        ("searchKeyword", "searchKeyword"),
        ("favorite", "favorite"),
        ("exactsearch", "exactsearch"),
    ):
        value = first(source_name)
        if value != "":
            params[target_name] = value

    return params


def safe_segment(name: str) -> str:
    cleaned = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "_", name).strip().strip(".")
    cleaned = re.sub(r"\s+", " ", cleaned)
    return cleaned or "item"


def guess_extension(url: str) -> str:
    ext = Path(urlparse(url).path).suffix.lower()
    if ext in {".png", ".jpg", ".jpeg", ".webp", ".gif"}:
        return ext
    return ".png"


def to_int_or_none(value: object) -> int | None:
    try:
        return int(value)  # type: ignore[arg-type]
    except (TypeError, ValueError):
        return None


def to_romaji(name: str) -> str:
    if lazy_pinyin is None or Style is None:
        raise RuntimeError("缺少 pypinyin，請先執行 pip install -r tools/requirements.txt")

    parts: list[str] = []
    for char in name:
        if "\u4e00" <= char <= "\u9fff":
            pinyin = lazy_pinyin(char, style=Style.NORMAL, strict=False)
            if pinyin:
                parts.append(pinyin[0].capitalize())
        elif char.isascii() and char.isalnum():
            parts.append(char)

    result = re.sub(r"[^A-Za-z0-9]", "", "".join(parts))
    return result or "item"


def ensure_unique_path(path: Path, item_id: int | None = None) -> Path:
    if not path.exists():
        return path

    suffix = path.suffix
    stem = path.stem
    if item_id is not None:
        candidate = path.with_name(f"{stem}_{item_id}{suffix}")
        if not candidate.exists():
            return candidate

    counter = 2
    while True:
        candidate = path.with_name(f"{stem}_{counter}{suffix}")
        if not candidate.exists():
            return candidate
        counter += 1


def download_binary(session: requests.Session, url: str, target: Path) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    temp_target = target.with_suffix(target.suffix + ".part")
    response = session.get(url, timeout=60, stream=True)
    response.raise_for_status()
    with temp_target.open("wb") as handle:
        for chunk in response.iter_content(chunk_size=1024 * 64):
            if chunk:
                handle.write(chunk)
    temp_target.replace(target)


def fetch_page(session: requests.Session, params: dict[str, str]) -> dict:
    response = session.get(SEARCH_API, params=params, timeout=60)
    response.raise_for_status()
    return response.json()


def collect_items(session: requests.Session, source_url: str, page_size: int, limit_pages: int = 0) -> list[dict]:
    first_page = fetch_page(session, parse_source_url(source_url, 1, page_size))
    contents = first_page.get("contents", []) or []
    pagination = first_page.get("pagination", {})
    total = 0
    if isinstance(pagination, dict):
        total = int(pagination.get("total") or 0)

    if total <= 0 or limit_pages == 1:
        return contents

    total_pages = max(1, math.ceil(total / page_size))
    if limit_pages > 0:
        total_pages = min(total_pages, limit_pages)

    all_items = list(contents)

    for page_number in range(2, total_pages + 1):
        payload = fetch_page(session, parse_source_url(source_url, page_number, page_size))
        all_items.extend(payload.get("contents", []) or [])

    return all_items


def write_manifest(rows: list[dict], manifest_path: Path) -> None:
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    with manifest_path.open("w", newline="", encoding="utf-8-sig") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=["id", "name", "romaji", "image_url", "cn_path", "romaji_path"],
        )
        writer.writeheader()
        writer.writerows(rows)


def resolve_target_dir(output_root: Path, source_url: str) -> Path:
    query = parse_qs(urlparse(source_url).query)
    category1 = query.get("category1", [""])[0] or ""
    category2 = query.get("category2", [""])[0] or ""
    grade = query.get("grade", [""])[0] or ""

    category1 = safe_segment(category1) if category1 else "materials"
    category2 = safe_segment(category2) if category2 else ""
    grade = safe_segment(grade) if grade else ""

    if category1 == "Equip_Weapon":
        return output_root / "weapons" / (category2 or "Unknown") / (grade or "All")
    if category1 == "Equip_Armor":
        return output_root / "armor" / (category2 or "Unknown") / (grade or "All")
    if category1 == "Equip_Accessory":
        return output_root / "accessories" / (category2 or "Unknown") / (grade or "All")

    if category1 == "materials" or category1 == "Equip_Material":
        return output_root / "materials"

    return output_root / safe_segment(category1) / (category2 or "All") / (grade or "All")


def load_sources(args: argparse.Namespace) -> list[str]:
    sources: list[str] = []
    if args.url:
        sources.append(args.url)

    if args.batch_file:
        batch_path = Path(args.batch_file)
        batch_data = json.loads(batch_path.read_text(encoding="utf-8"))
        if not isinstance(batch_data, list):
            raise ValueError("batch file 必須是一個 URL 陣列，或是包含 url 欄位的物件陣列")
        for entry in batch_data:
            if isinstance(entry, str):
                sources.append(entry)
            elif isinstance(entry, dict) and entry.get("url"):
                sources.append(str(entry["url"]))
            else:
                raise ValueError("batch file 每筆資料都必須是字串 URL 或包含 url 欄位的物件")

    unique_sources: list[str] = []
    for source in sources:
        if source not in unique_sources:
            unique_sources.append(source)
    return unique_sources


def main() -> int:
    parser = argparse.ArgumentParser(
        description="從 NCSoft AION2 道具清單頁抓取圖片，先以中文暫存，再轉成羅馬拼音檔名。"
    )
    parser.add_argument(
        "--url",
        help="單一 NCSoft 道具清單頁 URL。",
    )
    parser.add_argument(
        "--batch-file",
        help="JSON 批次清單檔，內容可為 URL 陣列或包含 url 欄位的物件陣列。",
    )
    parser.add_argument(
        "--asset-root",
        default="",
        help="若指定，圖片會直接輸出到 craft tool 的 images 根目錄，例如 ..\\images。",
    )
    parser.add_argument(
        "--output-dir",
        default="downloaded-images",
        help="未指定 asset-root 時的輸出資料夾，預設為 downloaded-images。",
    )
    parser.add_argument(
        "--size",
        type=int,
        default=30,
        help="每頁抓取數量，預設 30",
    )
    parser.add_argument(
        "--limit-pages",
        type=int,
        default=0,
        help="僅抓前 N 頁，0 表示不限制。適合先試跑。",
    )
    args = parser.parse_args()

    sources = load_sources(args)
    if not sources:
        parser.error("至少要提供 --url 或 --batch-file 其中一個")

    session = requests.Session()
    session.headers.update(DEFAULT_HEADERS)

    if args.asset_root:
        output_root = Path(args.asset_root)
    else:
        output_root = Path(args.output_dir)

    all_manifest_rows: list[dict] = []
    total_downloaded = 0

    for source_url in sources:
        items = collect_items(session, source_url, args.size, args.limit_pages)
        if not items:
            print(f"[{source_url}] 沒有抓到任何道具資料。")
            continue

        target_dir = resolve_target_dir(output_root, source_url)
        target_dir.mkdir(parents=True, exist_ok=True)

        parsed = urlparse(source_url)
        query = parse_qs(parsed.query)
        category_label = "/".join(
            [
                query.get("category1", [""])[0] or "",
                query.get("category2", [""])[0] or "",
                query.get("grade", [""])[0] or "",
            ]
        ).strip("/")

        manifest_rows: list[dict] = []
        downloaded = 0

        for item in items:
            image_url = item.get("image") or ""
            name = str(item.get("name") or "item")
            item_id = to_int_or_none(item.get("id"))
            if not image_url:
                continue

            extension = guess_extension(image_url)
            cn_stem = safe_segment(name)
            cn_path = ensure_unique_path(target_dir / f"{cn_stem}{extension}", item_id)
            download_binary(session, image_url, cn_path)

            romaji_stem = to_romaji(name)
            romaji_path = ensure_unique_path(target_dir / f"{romaji_stem}{extension}", item_id)
            if romaji_path != cn_path:
                cn_path.replace(romaji_path)

            manifest_rows.append(
                {
                    "id": item_id,
                    "name": name,
                    "romaji": romaji_stem,
                    "image_url": image_url,
                    "cn_path": cn_path.name,
                    "romaji_path": romaji_path.name,
                }
            )
            downloaded += 1
            print(f"[{category_label}] [{downloaded}/{len(items)}] {name} -> {romaji_path.name}")

        all_manifest_rows.extend(manifest_rows)
        total_downloaded += downloaded

        manifest_name = "mapping.csv"
        if len(sources) > 1:
            manifest_name = f"mapping_{safe_segment(category_label or 'batch')}.csv"
        write_manifest(manifest_rows, target_dir / manifest_name)
        print(f"[{source_url}] 完成：已下載 {downloaded} 張圖片。")
        print(f"[{source_url}] 對照表：{target_dir / manifest_name}")

    if len(sources) > 1:
        write_manifest(all_manifest_rows, output_root / "mapping_all.csv")
        print(f"批次完成：總共已下載 {total_downloaded} 張圖片。")
        print(f"總對照表：{output_root / 'mapping_all.csv'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())