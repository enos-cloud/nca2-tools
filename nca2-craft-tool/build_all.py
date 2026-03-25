import os
import re

# 自動偵測腳本所在目錄作為基底路徑
base_dir = os.path.dirname(os.path.abspath(__file__))

def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8-sig') as f:
            return f.read()
    except UnicodeDecodeError:
        with open(path, 'r', encoding='ansi') as f:
            return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# 1. 讀取原始檔案
css_path = os.path.join(base_dir, "css", "style.css")
items_path = os.path.join(base_dir, "js", "items.js")
recipes_path = os.path.join(base_dir, "js", "recipes.js")
app_path = os.path.join(base_dir, "app_series_cart.js")

css = read_file(css_path)
items = read_file(items_path)
recipes = read_file(recipes_path)
app = read_file(app_path)

# 2. 取代刻印與顏色
items = items.replace("(刻印)", "")
recipes = recipes.replace("(刻印)", "")
app = app.replace("(刻印)", "")

# 取代色碼 (Epic 橘色, Unique 黃色)
items = items.replace('"#ffd700"', '"#ffa500"') # Epic
items = items.replace('"#b366ff"', '"#ffd700"') # Unique

css = css.replace('--grade-epic: #ffd700;', '--grade-epic: #ffa500;')
css = css.replace('--grade-unique: #b366ff;', '--grade-unique: #ffd700;')

# 3. 處理圖片英文化 (同 rename.py)
TRANSLATE = {
  "閃耀的應龍霸王": "ShiningYinglongEmperor", "閃耀的夔龍霸王": "ShiningKuirongEmperor",
  "閃耀的應龍王": "ShiningYinglongKing", "閃耀的夔龍王": "ShiningKuirongKing",
  "應龍霸王": "YinglongEmperor", "夔龍霸王": "KuirongEmperor", "應龍王": "YinglongKing", "夔龍王": "KuirongKing",
  "古代精靈": "AncientSpirit", "被侵蝕的殘影": "ErodedShadow", "盧德萊": "Rudra",
  "守衛者軍團長": "GuardianBG", "執政官軍團長": "ArchonBG", "被侵蝕的支配者": "ErodedDominator",
  "頭盔": "Helmet", "胸甲": "Torso", "腿甲": "Pants", "手套": "Gloves", "長靴": "Boots",
  "肩甲": "Shoulder", "披風": "Cape", "戒指": "Ring", "耳環": "Earring", "項鍊": "Necklace", "手鐲": "Bracelet",
  "閃耀的": "Shining",
    "巨劍": "Greatsword", "長劍": "Sword", "短劍": "Dagger", "弓": "Bow",
    "魔法書": "Spellbook", "法珠": "Orb", "釘錘": "Mace", "法杖": "Staff", "臂甲": "Guarder",
    "絕滅刀": "Greatsword", "鱗片劍": "Sword", "腳爪": "Dagger", "絕命弓": "Bow",
    "禁書": "Spellbook", "深淵玉": "Orb", "滅錘": "Mace", "心臟": "Guarder",
    "捕食巨劍": "Greatsword", "灼熱劍": "Sword", "惡意": "Dagger", "灼熱弓": "Bow",
    "炎火": "Spellbook", "紅焰玉": "Orb", "赤熱錘": "Mace", "鎖鏈": "Guarder",
    "達人最上級提煉石": "MasterSupremeRefinerStone", "提煉的強固龍族角": "RefinedSolidBalaurHorn",
    "提煉的強結龍族角": "RefinedFirmBalaurHorn", "鞣製的強固龍族皮革": "TannedSolidBalaurLeather",
    "鞣製的強結龍族皮革": "TannedFirmBalaurLeather", "強化的強固龍族鱗片": "EnhancedSolidBalaurScale",
    "強化的強結龍族鱗片": "EnhancedFirmBalaurScale", "憤怒思念": "AngerThought",
    "憤怒意志": "AngerWill", "憤怒自我": "AngerSelf", "憤怒昇華": "AngerSublimation",
    "憤怒願望": "AngerDesire", "發狂的憤怒巫蠱": "CrazyAngerVoodoo", "發狂的憤怒心血": "CrazyAngerBlood",
    "強固的龍族皮革": "SolidBalaurLeather", "強固的龍族角": "SolidBalaurHorn",
    "強固的龍族鱗片": "SolidBalaurScale", "強結的龍族皮革": "FirmBalaurLeather",
    "強結的龍族角": "FirmBalaurHorn", "強結的龍族鱗片": "FirmBalaurScale"
}

def translate_name(name):
    keys = sorted(TRANSLATE.keys(), key=len, reverse=True)
    res = name
    for k in keys: res = res.replace(k, TRANSLATE[k])
    res = re.sub(r'[^a-zA-Z0-9_]', '', res)
    return res if res else "item"

image_paths = set(re.findall(r'"((?:nca2-craft-tool/)?images/[^"]+\.png)"', items))
for old_path in image_paths:
    filename = old_path.split('/')[-1][:-4]
    new_filename = translate_name(filename) + ".png"
    new_path = "/".join(old_path.split('/')[:-1]) + "/" + new_filename
    
    # Check if we need to rename on disk
    abs_old = os.path.normpath(os.path.join(base_dir, old_path.replace('/', os.sep)))
    abs_new = os.path.normpath(os.path.join(base_dir, new_path.replace('/', os.sep)))
    if os.path.exists(abs_old) and abs_old != abs_new:
        try: os.rename(abs_old, abs_new)
        except: pass
        
    items = items.replace(f'"{old_path}"', f'"{new_path}"')

# 4. 生成最終 index.html
html = f"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AION2 裝備製作計算器 | 系列套裝合併模式</title>
  <meta name="description" content="AION2 永恆紀元2 裝備製作成本計算器 — 依照裝備系列分組，支援多件裝備材料合併計算">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚔️</text></svg>">
  <style>
{css}
.cart-item {{ display: flex; align-items: center; justify-content: space-between; background: rgba(12,18,34,0.6); border: 1px solid var(--border-dim); padding: 10px; border-radius: 8px; margin-bottom: 8px; transition: all 0.3s; }}
.cart-item:hover {{ border-color: rgba(100,160,255,0.4); background: rgba(16,24,46,0.8); }}
.cart-item-info {{ display: flex; align-items: center; gap: 12px; }}
.cart-qty-ctrl {{ display: flex; align-items: center; gap: 6px; }}
.qty-btn {{ background: rgba(30,40,70,0.8); border:none; color:#fff; width:28px; height:28px; border-radius:4px; cursor:pointer; font-weight:bold; }}
.qty-btn:hover {{ background: var(--accent-blue); }}
.remove-btn {{ color: var(--accent-red); cursor:pointer; background:none; border:none; font-size:18px; margin-left: 8px; }}
.remove-btn:hover {{ transform: scale(1.1); }}
.cart-section h3 {{ margin-bottom: 16px; font-size: 16px; color: var(--text-secondary); display:flex; align-items:center; gap:8px;}}
  </style>
</head>
<body>
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <div class="logo-icon">A2</div>
        <div>
          <div class="logo-text">AION2 CRAFT</div>
          <div class="logo-subtitle">裝備製作成本計算器 (系列配置整合版)</div>
        </div>
      </div>
      <div class="header-info">
        <span>💡 依照系列選擇武器，並一次試算多件合併材料花費</span>
      </div>
    </div>
  </header>

  <main class="main-container">
    <div class="content-grid">
      <aside class="sidebar">
        <div class="panel">
          <div class="panel-header">
            <span class="icon">✨</span>
            <h2>裝備系列選單 (點擊開始配置)</h2>
          </div>
          <div class="filter-tabs" id="filter-tabs" style="display:none;"></div>
          <div class="equipment-list" id="equipment-list"></div>
        </div>
      </aside>

      <section class="main-content">
        <div class="panel" style="padding: 24px; margin-bottom: 24px;" id="series-detail-panel">
          <div class="empty-state"><p>請從左側挑選裝備系列</p></div>
        </div>

        <div class="panel" style="padding: 24px; position: relative; margin-bottom: 24px;">
          <div class="cart-section">
            <h3>🛒 您規劃製作的購物車清單</h3>
            <div id="cart-container"></div>
          </div>
        </div>

        <div class="panel" style="padding: 24px;">
          <div class="equip-materials">
            <h3 style="font-size: 16px; margin-bottom: 16px; color: var(--text-secondary);">📋 需求材料總覽 (所有項目已合併加總)</h3>
            <div class="materials-grid" id="materials-grid"></div>
          </div>
        </div>

        <div class="cost-summary" style="margin-top: 24px;">
          <div class="cost-label">
            <h3>💰 總合併成本試算</h3>
            <p id="total-info">請先安排您的裝備製作清單</p>
          </div>
          <div class="cost-total">
            <span class="cost-amount" id="total-amount">0</span>
            <span class="cost-currency">基納</span>
          </div>
          <div class="cost-actions">
            <button class="btn btn-primary" onclick="exportReport()" data-tooltip="複製成本報表到剪貼簿">📋 匯出報表</button>
            <button class="btn btn-secondary" onclick="clearAllPrices()" data-tooltip="清除所有已輸入的價格">🗑️ 清除單價</button>
          </div>
        </div>
      </section>
    </div>
  </main>

  <script>
{items}

{recipes}

{app}
  </script>
</body>
</html>"""

write_file(os.path.join(base_dir, "index.html"), html)
write_file(items_path, items)
write_file(recipes_path, recipes)
write_file(css_path, css)

print("Build successful.")
