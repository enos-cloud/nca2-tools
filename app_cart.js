/**
 * 新版 AION2 裝備製作成本計算器 (購物車合併模式)
 */

let cart = {}; // 格式: { "裝備名稱": 數量 }
let currentFilter = null;
const STORAGE_PREFIX = 'aion2_price_';

function init() {
  renderFilterTabs();
  renderEquipmentList();
  renderCart();
}

function renderFilterTabs() {
  const container = document.getElementById('filter-tabs');
  const categories = new Set();
  Object.values(RECIPES).forEach(r => categories.add(r.category));
  
  let html = `<button class="filter-tab active" data-category="all" onclick="setFilter(null, this)">全部</button>`;
  categories.forEach(cat => {
    const label = WEAPON_SUBTYPES[cat] || cat;
    html += `<button class="filter-tab" data-category="${cat}" onclick="setFilter('${cat}', this)">${label}</button>`;
  });
  container.innerHTML = html;
}

function setFilter(category, btn) {
  currentFilter = category;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderEquipmentList();
}

function renderEquipmentList() {
  const container = document.getElementById('equipment-list');
  let html = '';
  
  Object.entries(RECIPES).forEach(([name, recipe]) => {
    if (currentFilter && recipe.category !== currentFilter) return;
    
    const item = ITEMS[name];
    const imageSrc = item && item.image ? item.image : null;
    const grade = recipe.grade.toLowerCase();
    const categoryLabel = WEAPON_SUBTYPES[recipe.category] || recipe.category;
    
    // 點擊事件改為加入購物車
    html += `
      <div class="equipment-item" onclick="addToCart('${escapeHtml(name)}')">
        <div class="item-icon grade-${grade}">
          ${imageSrc ? `<img src="${imageSrc}" loading="lazy">` : `<div class="default-item-icon">⚔</div>`}
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

function addToCart(name) {
  if (cart[name]) cart[name]++;
  else cart[name] = 1;
  renderCart();
  showToast('已將 ' + name + ' 加入清單');
}

function updateCartQty(name, delta) {
  if (!cart[name]) return;
  cart[name] += delta;
  if (cart[name] <= 0) {
    delete cart[name];
  }
  renderCart();
}

function removeFromCart(name) {
  delete cart[name];
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-container');
  const emptyState = `<div class="empty-state" style="padding: 40px;"><div class="icon">🛒</div><p>清單是空的，請從左側點擊裝備以加入計算清單。</p></div>`;
  
  if (Object.keys(cart).length === 0) {
    container.innerHTML = emptyState;
    document.getElementById('materials-grid').innerHTML = '';
    calculateTotal({}); // 清空總數
    return;
  }
  
  let html = '';
  let aggMats = {};
  
  for (let [name, qty] of Object.entries(cart)) {
    const item = ITEMS[name];
    const recipe = RECIPES[name];
    const imageSrc = item && item.image ? item.image : null;
    const grade = recipe ? recipe.grade.toLowerCase() : 'normal';
    
    html += `
      <div class="cart-item fade-in">
        <div class="cart-item-info">
          <div class="material-icon grade-${grade}" style="width: 40px; height: 40px;">
            ${imageSrc ? `<img src="${imageSrc}">` : `<div class="default-item-icon">⚔</div>`}
          </div>
          <div class="material-name ${grade}" style="font-size: 15px;">${escapeHtml(name)}</div>
        </div>
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateCartQty('${escapeHtml(name)}', -1)">-</button>
          <span style="font-weight: bold; width: 30px; text-align: center; font-size: 16px;">${qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${escapeHtml(name)}', 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart('${escapeHtml(name)}')">🗑️</button>
        </div>
      </div>
    `;
    
    // 合併材料
    if (recipe && recipe.materials) {
      recipe.materials.forEach(mat => {
        if (!aggMats[mat.name]) aggMats[mat.name] = 0;
        aggMats[mat.name] += mat.qty * qty;
      });
    }
  }
  
  container.innerHTML = html;
  renderMaterials(aggMats);
}

function renderMaterials(aggMats) {
  const grid = document.getElementById('materials-grid');
  let html = '';
  let idx = 0;
  
  for (let [matName, totalQty] of Object.entries(aggMats)) {
    const item = ITEMS[matName];
    const imageSrc = item && item.image ? item.image : null;
    const grade = item ? item.grade.toLowerCase() : 'normal';
    const savedPrice = loadPrice(matName);
    
    html += `
      <div class="material-row fade-in" style="animation-delay:${idx * 0.05}s">
        <div class="material-icon grade-${grade}">
          ${imageSrc ? `<img src="${imageSrc}" loading="lazy">` : `<div class="default-item-icon">📦</div>`}
        </div>
        <div class="material-info">
          <div class="material-name ${grade}" title="${escapeHtml(matName)}">${escapeHtml(matName)}</div>
        </div>
        <div class="material-qty">
          x <strong>${totalQty.toLocaleString()}</strong>
        </div>
        <div class="price-input-wrapper">
          <span class="price-currency">💰</span>
          <input type="text" class="price-input" placeholder="輸入單價" 
                 data-material="${escapeHtml(matName)}" data-qty="${totalQty}" 
                 value="${savedPrice || ''}" oninput="onPriceInput(this)" id="price-${idx}">
        </div>
        <div class="material-subtotal ${savedPrice ? 'has-value' : ''}" id="subtotal-${idx}">
          ${savedPrice ? formatKinah(savedPrice * totalQty) : '—'}
        </div>
      </div>
    `;
    idx++;
  }
  
  grid.innerHTML = html;
  calculateTotal();
}

function onPriceInput(input) {
  const raw = input.value.replace(/[^0-9]/g, '');
  const price = parseInt(raw) || 0;
  const qty = parseInt(input.dataset.qty) || 0;
  const matName = input.dataset.material;
  const idx = input.id.replace('price-', '');
  const subtotalEl = document.getElementById(`subtotal-${idx}`);
  
  if (raw) input.value = parseInt(raw).toLocaleString();
  
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
    if (inputs.length === 0) {
      infoEl.textContent = '請先加入裝備到清單';
    } else {
      infoEl.textContent = `已填入 ${filledCount} / ${inputs.length} 項材料價格`;
    }
  }
}

function clearAllPrices() {
  if (!confirm('確定要清除所有已輸入的材料價格嗎？')) return;
  document.querySelectorAll('.price-input').forEach(input => {
    input.value = '';
    removePrice(input.dataset.material);
  });
  document.querySelectorAll('.material-subtotal').forEach(el => {
    el.textContent = '—';
    el.classList.remove('has-value');
  });
  calculateTotal();
}

function exportReport() {
  if (Object.keys(cart).length === 0) return showToast('請先加入裝備');
  
  let text = `═══ AION2 裝備合併成本報表 ═══\n【裝備清單】\n`;
  for(let [name, qty] of Object.entries(cart)) {
    text += `- ${name} x${qty}\n`;
  }
  text += `──────────────────\n【材料總計】\n`;
  
  let total = 0;
  document.querySelectorAll('.price-input').forEach(input => {
    const matName = input.dataset.material;
    const qty = input.dataset.qty;
    const raw = input.value.replace(/[^0-9]/g, '');
    const price = parseInt(raw) || 0;
    const subtotal = price * qty;
    
    total += subtotal;
    text += `${matName} x${qty}`;
    if (price > 0) {
      text += ` | 單價: ${price.toLocaleString()} | 小計: ${subtotal.toLocaleString()}\n`;
    } else {
      text += ` | 未定價\n`;
    }
  });
  
  text += `──────────────────\n`;
  text += `💰 總成本：${total.toLocaleString()} 基納\n`;
  text += `═══════════════════\n`;
  
  navigator.clipboard.writeText(text).then(() => showToast('報表已複製到剪貼簿！'))
    .catch(() => showToast('複製失敗，請手動複製'));
}

// Utils
function formatKinah(amount) {
  if (amount >= 100000000) return (amount / 100000000).toFixed(1) + '億';
  if (amount >= 10000) return (amount / 10000).toFixed(1) + '萬';
  return amount.toLocaleString();
}
function escapeHtml(str) { const d = document.createElement('div'); d.textContent = str; return d.innerHTML; }
function savePrice(name, price) { try { localStorage.setItem(STORAGE_PREFIX + name, price.toString()); } catch(e){} }
function loadPrice(name) { try { const v = localStorage.getItem(STORAGE_PREFIX + name); return v ? parseInt(v) : null; } catch(e){ return null; } }
function removePrice(name) { try { localStorage.removeItem(STORAGE_PREFIX + name); } catch(e){} }
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `position:fixed;bottom:30px;left:50%;transform:translateX(-50%) translateY(20px);padding:12px 24px;background:rgba(0,212,255,0.15);color:#00d4ff;border:1px solid rgba(0,212,255,0.3);border-radius:12px;font-size:14px;pointer-events:none;opacity:0;transition:all 0.3s;z-index:9999;backdrop-filter:blur(4px);`;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(-50%) translateY(20px)'; }, 2000);
}

document.addEventListener('DOMContentLoaded', init);
