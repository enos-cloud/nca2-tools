# NCSoft 圖片抓取工具

這支腳本會從 AION2 的道具清單頁抓出圖片，流程是：

1. 先用中文檔名下載到目標資料夾
2. 再把同一批檔案改成羅馬拼音檔名
3. 輸出一份 `mapping.csv` 方便你對照原名與最終檔名
4. 可直接輸出到 `nca2-craft-tool/images/`，讓 craft tool 直接吃到新資產

## 安裝

```bash
python -m pip install -r tools/requirements.txt
```

## 使用

```bash
python tools/fetch_ncsoft_item_images.py --url "https://tw.ncsoft.com/aion2/info/item?class=&page=&grade=Unique&category1=Equip_Weapon&category2=Sword" --output-dir "images/ncsoft"
```

### 批次抓取

如果你要一次抓多個分類頁，可以用 JSON 批次檔：

```bash
python tools/fetch_ncsoft_item_images.py --batch-file "tools/batch.json" --asset-root "images"
```

批次檔可以是 URL 陣列，或是包含 `url` 欄位的物件陣列。

如果你只是想直接改內容，請先複製 [batch.example.json](batch.example.json) 再調整網址。

## 備註

- `--size` 預設是 30，和網站清單 API 的每頁數量一致
- `--limit-pages` 可以先試抓前幾頁，避免一次跑太多
- 檔名會依照中文內容轉成羅馬拼音 CamelCase，方便後續放進 craft tool
- `--asset-root` 指向 `nca2-craft-tool/images` 時，武器會進入 `weapons/`，防具會進入 `armor/`，飾品會進入 `accessories/`，其餘預設進 `materials/`