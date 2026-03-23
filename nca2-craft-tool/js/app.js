/**
 * AION2 裝備製作成本計算器 — 主程式邏輯
 */

// 當前選中的裝備名稱
let selectedEquipment = null;

// 當前篩選的武器類別 (null = 全部)
let currentFilter = null;

// localStorage 鍵名前綴
const STORAGE_PREFIX = 'aion2_price_';

/**
 * 初始化應用
 */
function init() {
  renderFilterTabs();
  renderEquipmentList();
  renderEmptyState();
  
  // 預設選取第一個裝備
  const firstEquip = Object.keys(RECIPES)[0];
  if (firstEquip) {
    selectEquipment(firstEquip);
  }
}

/**
 * 渲染武器類別篩選標籤
 */
function renderFilterTabs() {
  const container = document.getElementById('filter-tabs');
  
  // 取得所有不重複的類別
  const categories = new Set();
  Object.values(RECIPES).forEach(r => categories.add(r.category));
  
  let html = `<button class="filter-tab active" data-category="all" onclick="setFilter(null, this)">全部</button>`;
  categories.forEach(cat => {
    const label = WEAPON_SUBTYPES[cat] || cat;
    html += `<button class="filter-tab" data-category="${cat}" onclick="setFilter('${cat}', this)">${label}</button>`;
  });
  
  container.innerHTML = html;
}

/**
 * 設定類別篩選
 */
function setFilter(category, btn) {
  currentFilter = category;
  
  // 更新標籤狀態
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  
  renderEquipmentList();
}

/**
 * 渲染裝備清單
 */
function renderEquipmentList() {
  const container = document.getElementById('equipment-list');
  let html = '';
  
  Object.entries(RECIPES).forEach(([name, recipe]) => {
    // 篩選
    if (currentFilter && recipe.category !== currentFilter) return;
    
    const item = ITEMS[name];
    const imageSrc = item && item.image ? item.image : null;
    const grade = recipe.grade.toLowerCase();
    const isSelected = name === selectedEquipment;
    const categoryLabel = WEAPON_SUBTYPES[recipe.category] || recipe.category;
    
    html += `
      <div class="equipment-item ${isSelected ? 'selected' : ''}" 
           onclick="selectEquipment('${escapeHtml(name)}')" 
           id="equip-${hashCode(name)}">
        <div class="item-icon grade-${grade}">
          ${imageSrc 
            ? `<img src="${imageSrc}" alt="${escapeHtml(name)}" loading="lazy">` 
            : `<div class="default-item-icon">⚔</div>`}
        </div>
        <div>
          <div class="item-name ${grade}">${escapeHtml(name)}</div>
          <div class="item-category">${categoryLabel}</div>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html || '<div class="empty-state"><p>無符合條件的裝備</p></div>';
}

/**
 * 選取裝備並渲染詳細資訊
 */
function selectEquipment(name) {
  selectedEquipment = name;
  
  // 更新左側列表的選中狀態
  document.querySelectorAll('.equipment-item').forEach(el => el.classList.remove('selected'));
  const targetEl = document.getElementById(`equip-${hashCode(name)}`);
  if (targetEl) targetEl.classList.add('selected');
  
  renderEquipmentDetail(name);
}

/**
 * 渲染裝備詳情與材料清單
 */
function renderEquipmentDetail(name) {
  const recipe = RECIPES[name];
  if (!recipe) return renderEmptyState();
  
  const item = ITEMS[name];
  const imageSrc = item && item.image ? item.image : null;
  const grade = recipe.grade.toLowerCase();
  const categoryLabel = WEAPON_SUBTYPES[recipe.category] || recipe.category;
  
  // 裝備預覽區
  const detailHtml = `
    <div class="equipment-detail fade-in">
      <div class="equip-preview">
        <div class="equip-image-frame">
          ${imageSrc 
            ? `<img src="${imageSrc}" alt="${escapeHtml(name)}">` 
            : `<div class="default-item-icon" style="font-size:60px">⚔</div>`}
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:10px;">
          <span class="equip-grade-badge ${grade}">★ ${recipe.grade}</span>
          <div class="equip-name ${grade}">${escapeHtml(name)}</div>
          <div style="font-size:13px; color:var(--text-dim)">${categoryLabel}</div>
        </div>
      </div>
      
      <div class="equip-materials">
        <h3>📋 製作材料</h3>
        <div class="materials-grid" id="materials-grid">
          ${renderMaterials(recipe.materials)}
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('detail-container').innerHTML = detailHtml;
  
  // 更新總成本
  calculateTotal();
}

/**
 * 渲染材料列表
 */
function renderMaterials(materials) {
  return materials.map((mat, idx) => {
    const item = ITEMS[mat.name];
    const imageSrc = item && item.image ? item.image : null;
    const grade = item ? item.grade.toLowerCase() : 'normal';
    const savedPrice = loadPrice(mat.name);
    
    return `
      <div class="material-row fade-in" style="animation-delay:${idx * 0.05}s">
        <div class="material-icon grade-${grade}">
          ${imageSrc 
            ? `<img src="${imageSrc}" alt="${escapeHtml(mat.name)}" loading="lazy">` 
            : `<div class="default-item-icon">📦</div>`}
        </div>
        <div class="material-info">
          <div class="material-name ${grade}" title="${escapeHtml(mat.name)}">${escapeHtml(mat.name)}</div>
        </div>
        <div class="material-qty">
          x <strong>${mat.qty.toLocaleString()}</strong>
        </div>
        <div class="price-input-wrapper">
          <span class="price-currency">💰</span>
          <input type="text" 
                 class="price-input" 
                 placeholder="輸入單價" 
                 data-material="${escapeHtml(mat.name)}"
                 data-qty="${mat.qty}"
                 value="${savedPrice || ''}"
                 oninput="onPriceInput(this)"
                 id="price-${idx}">
        </div>
        <div class="material-subtotal ${savedPrice ? 'has-value' : ''}" id="subtotal-${idx}">
          ${savedPrice ? formatKinah(savedPrice * mat.qty) : '—'}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * 價格輸入事件
 */
function onPriceInput(input) {
  const raw = input.value.replace(/[^0-9]/g, '');
  const price = parseInt(raw) || 0;
  const qty = parseInt(input.dataset.qty) || 0;
  const matName = input.dataset.material;
  const idx = input.id.replace('price-', '');
  const subtotalEl = document.getElementById(`subtotal-${idx}`);
  
  // 格式化輸入值
  if (raw) {
    input.value = parseInt(raw).toLocaleString();
  }
  
  // 更新小計
  if (price > 0) {
    subtotalEl.textContent = formatKinah(price * qty);
    subtotalEl.classList.add('has-value');
    savePrice(matName, price);
  } else {
    subtotalEl.textContent = '—';
    subtotalEl.classList.remove('has-value');
    removePrice(matName);
  }
  
  calculateTotal();
}

/**
 * 計算並更新總成本
 */
function calculateTotal() {
  let total = 0;
  let filledCount = 0;
  const inputs = document.querySelectorAll('.price-input');
  
  inputs.forEach(input => {
    const raw = input.value.replace(/[^0-9]/g, '');
    const price = parseInt(raw) || 0;
    const qty = parseInt(input.dataset.qty) || 0;
    if (price > 0) {
      total += price * qty;
      filledCount++;
    }
  });
  
  const amountEl = document.getElementById('total-amount');
  const infoEl = document.getElementById('total-info');
  
  if (amountEl) {
    amountEl.textContent = total > 0 ? total.toLocaleString() : '0';
  }
  if (infoEl) {
    infoEl.textContent = `已填入 ${filledCount} / ${inputs.length} 項材料價格`;
  }
}

/**
 * 清除所有價格
 */
function clearAllPrices() {
  if (!confirm('確定要清除所有已輸入的材料價格嗎？')) return;
  
  document.querySelectorAll('.price-input').forEach(input => {
    input.value = '';
    const matName = input.dataset.material;
    removePrice(matName);
  });
  
  document.querySelectorAll('.material-subtotal').forEach(el => {
    el.textContent = '—';
    el.classList.remove('has-value');
  });
  
  calculateTotal();
}

/**
 * 匯出報表 (複製到剪貼簿)
 */
function exportReport() {
  if (!selectedEquipment) return;
  const recipe = RECIPES[selectedEquipment];
  if (!recipe) return;
  
  let text = `═══ AION2 裝備製作成本報表 ═══\n`;
  text += `裝備名稱：${selectedEquipment}\n`;
  text += `品級：${recipe.grade}\n`;
  text += `類別：${WEAPON_SUBTYPES[recipe.category] || recipe.category}\n`;
  text += `──────────────────\n`;
  
  let total = 0;
  recipe.materials.forEach(mat => {
    const price = loadPrice(mat.name) || 0;
    const subtotal = price * mat.qty;
    total += subtotal;
    text += `${mat.name} x${mat.qty}`;
    if (price > 0) {
      text += ` | 單價: ${price.toLocaleString()} | 小計: ${subtotal.toLocaleString()}\n`;
    } else {
      text += ` | 未定價\n`;
    }
  });
  
  text += `──────────────────\n`;
  text += `💰 總成本：${total.toLocaleString()} 基納\n`;
  text += `═══════════════════\n`;
  
  navigator.clipboard.writeText(text).then(() => {
    showToast('報表已複製到剪貼簿！');
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('報表已複製到剪貼簿！');
  });
}

/**
 * 顯示提示訊息
 */
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(20px);
      padding: 12px 24px; background: rgba(0, 212, 255, 0.15); color: #00d4ff;
      border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 12px;
      font-size: 14px; font-weight: 500; backdrop-filter: blur(12px);
      pointer-events: none; opacity: 0; transition: all 0.3s ease; z-index: 9999;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2500);
}

/**
 * 渲染空狀態
 */
function renderEmptyState() {
  document.getElementById('detail-container').innerHTML = `
    <div class="panel" style="min-height: 400px;">
      <div class="empty-state">
        <div class="icon">⚔️</div>
        <h3>選擇一件裝備</h3>
        <p>從左側面板選擇想要製作的裝備，即可查看所需材料與計算製作成本</p>
      </div>
    </div>
  `;
}

// ========== 工具函數 ==========

/**
 * 格式化基納金額
 */
function formatKinah(amount) {
  if (amount >= 100000000) {
    return (amount / 100000000).toFixed(1) + '億';
  }
  if (amount >= 10000) {
    return (amount / 10000).toFixed(1) + '萬';
  }
  return amount.toLocaleString();
}

/**
 * HTML 跳脫
 */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * 簡易 hash (用於 DOM id)
 */
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

/**
 * 儲存價格到 localStorage
 */
function savePrice(name, price) {
  try {
    localStorage.setItem(STORAGE_PREFIX + name, price.toString());
  } catch(e) { /* 忽略 */ }
}

/**
 * 從 localStorage 載入價格
 */
function loadPrice(name) {
  try {
    const val = localStorage.getItem(STORAGE_PREFIX + name);
    return val ? parseInt(val) : null;
  } catch(e) { return null; }
}

/**
 * 從 localStorage 移除價格
 */
function removePrice(name) {
  try {
    localStorage.removeItem(STORAGE_PREFIX + name);
  } catch(e) { /* 忽略 */ }
}

// 頁面載入後初始化
document.addEventListener('DOMContentLoaded', init);
