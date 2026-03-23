$css = Get-Content 'nca2-craft-tool\css\style.css' -Raw
$items = (Get-Content 'nca2-craft-tool\js\items.js' -Raw) -replace '"images/', '"nca2-craft-tool/images/'
$recipes = Get-Content 'nca2-craft-tool\js\recipes.js' -Raw
$app = Get-Content 'app_cart.js' -Raw

$html = @"
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AION2 裝備製作成本計算器 | 購物車模式</title>
  <meta name="description" content="AION2 永恆紀元2 裝備製作成本計算器 — 支援多件裝備材料合併計算">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚔️</text></svg>">
  <style>
$css
.cart-item { display: flex; align-items: center; justify-content: space-between; background: rgba(12,18,34,0.6); border: 1px solid var(--border-dim); padding: 10px; border-radius: 8px; margin-bottom: 8px; transition: all 0.3s; }
.cart-item:hover { border-color: rgba(100,160,255,0.4); background: rgba(16,24,46,0.8); }
.cart-item-info { display: flex; align-items: center; gap: 12px; }
.cart-qty-ctrl { display: flex; align-items: center; gap: 6px; }
.qty-btn { background: rgba(30,40,70,0.8); border:none; color:#fff; width:28px; height:28px; border-radius:4px; cursor:pointer; font-weight:bold; }
.qty-btn:hover { background: var(--accent-blue); }
.remove-btn { color: var(--accent-red); cursor:pointer; background:none; border:none; font-size:18px; margin-left: 8px; }
.remove-btn:hover { transform: scale(1.1); }
.cart-section h3 { margin-bottom: 16px; font-size: 16px; color: var(--text-secondary); display:flex; align-items:center; gap:8px;}
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <div class="logo-icon">A2</div>
        <div>
          <div class="logo-text">AION2 CRAFT</div>
          <div class="logo-subtitle">裝備製作成本計算器 (綜合單頁版)</div>
        </div>
      </div>
      <div class="header-info">
        <span>💡 目前已支援多把裝備合併計算，解決了 404 問題，單機與 GitHub Pages 皆順暢執行</span>
      </div>
    </div>
  </header>

  <main class="main-container">
    <div class="content-grid">
      <aside class="sidebar">
        <div class="panel">
          <div class="panel-header">
            <span class="icon">⚔️</span>
            <h2>裝備選單 (點選加入)</h2>
          </div>
          <div class="filter-tabs" id="filter-tabs"></div>
          <div class="equipment-list" id="equipment-list"></div>
        </div>
      </aside>

      <section class="main-content">
        <!-- 購物車清單 -->
        <div class="panel" style="padding: 24px; position: relative; margin-bottom: 24px;">
          <div class="cart-section">
            <h3>🛒 您選擇的製作清單</h3>
            <div id="cart-container"></div>
          </div>
        </div>

        <!-- 合併材料清單 -->
        <div class="panel" style="padding: 24px;">
          <div class="equip-materials">
            <h3 style="font-size: 16px; margin-bottom: 16px; color: var(--text-secondary);">📋 需求材料總覽 (已合併)</h3>
            <div class="materials-grid" id="materials-grid"></div>
          </div>
        </div>

        <!-- 總成本 -->
        <div class="cost-summary" style="margin-top: 24px;">
          <div class="cost-label">
            <h3>💰 合併總成本</h3>
            <p id="total-info">請先加入裝備到清單</p>
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
$items

$recipes

$app
  </script>
</body>
</html>
"@

Set-Content -Path 'index.html' -Value $html -Encoding UTF8
