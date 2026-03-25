/**
 * 新版 AION2 裝備製作成本計算器 (系列化購物車模式)
 */

const SERIES_NAMES = ["應龍王", "夔龍王"];
let ALL_SERIES = {};
const RACE_ORDER = ["魔族", "天族", "其他"];

let cart = {}; // { "裝備名稱": 數量 }
let currentSeries = null;
const STORAGE_PREFIX = 'aion2_price_';

function init() {
  processSeries();
  renderEquipmentList();
  renderSeriesDetail();
  renderCart();
}

function processSeries() {
  SERIES_NAMES.forEach(s => ALL_SERIES[s] = { weapons: {}, guarders: {}, grade: 'Normal' });
  
  Object.entries(RECIPES).forEach(([name, recipe]) => {
    let matchedSeries = null;
    let maxLen = 0;
    SERIES_NAMES.forEach(s => {
      if (name.startsWith(s) && s.length > maxLen) {
        matchedSeries = s;
        maxLen = s.length;
      }
    });
    
    if (matchedSeries) {
      ALL_SERIES[matchedSeries].grade = recipe.grade;
      ALL_SERIES[matchedSeries].race = getSeriesRace(name);
      if (recipe.category === 'Guarder') {
        ALL_SERIES[matchedSeries].guarders['Guarder'] = name;
      } else {
        ALL_SERIES[matchedSeries].weapons[recipe.category] = name;
      }
    }
  });
  
  // 移除沒有裝備的系列
  Object.keys(ALL_SERIES).forEach(s => {
    if(Object.keys(ALL_SERIES[s].weapons).length === 0 && Object.keys(ALL_SERIES[s].guarders).length === 0) {
      delete ALL_SERIES[s];
    }
  });
}

function getSeriesRace(name) {
  if (name.includes('應龍')) return '天族';
  if (name.includes('夔龍')) return '魔族';
  return '其他';
}

function getRenderableSeriesEntries() {
  const seriesMap = {};

  Object.entries(RECIPES).forEach(([name, recipe]) => {
    let matchedSeries = null;
    let maxLen = 0;

    SERIES_NAMES.forEach(seriesName => {
      if (name.startsWith(seriesName) && seriesName.length > maxLen) {
        matchedSeries = seriesName;
        maxLen = seriesName.length;
      }
    });

    if (!matchedSeries) return;

    if (!seriesMap[matchedSeries]) {
      seriesMap[matchedSeries] = { weapons: {}, guarders: {}, grade: 'Normal', race: getSeriesRace(name) };
    }

    seriesMap[matchedSeries].grade = recipe.grade;
    seriesMap[matchedSeries].race = getSeriesRace(name);

    if (recipe.category === 'Guarder') {
      seriesMap[matchedSeries].guarders['Guarder'] = name;
    } else {
      seriesMap[matchedSeries].weapons[recipe.category] = name;
    }
  });

  return Object.entries(seriesMap);
}

function renderEquipmentList() {
  const container = document.getElementById('equipment-list');
  let html = '';
  const seriesEntries = getRenderableSeriesEntries();
  
  RACE_ORDER.forEach(race => {
    const raceSeries = seriesEntries.filter(([_, data]) => (data.race || '其他') === race);
    if (raceSeries.length === 0) return;

    html += `
      <div style="padding: 12px 14px 8px; font-size: 12px; font-weight: 700; color: var(--text-dim); letter-spacing: 1px;">${race} 系列</div>
    `;

    raceSeries.forEach(([seriesName, data]) => {
      const isSelected = currentSeries === seriesName;
      const grade = (data.grade || 'Normal').toLowerCase();
      const raceTag = data.race || '其他';
      
      html += `
        <div class="equipment-item ${isSelected ? 'selected' : ''}" onclick="selectSeries('${seriesName}')">
          <div class="item-icon grade-${grade}">
            <div class="default-item-icon" style="font-size: 20px;">🛡️</div>
          </div>
          <div>
            <div class="item-name ${grade}">${seriesName} 系列</div>
            <div class="item-category">${raceTag} · ${Object.keys(data.weapons).length} 種裝備選擇</div>
          </div>
        </div>
      `;
    });
  });
  
  container.innerHTML = html || '<div class="empty-state"><p>無可用的裝備系列</p></div>';
}

function selectSeries(seriesName) {
  currentSeries = seriesName;
  document.querySelectorAll('.equipment-item').forEach(el => el.classList.remove('selected'));
  renderEquipmentList();
  renderSeriesDetail();
}

function getItemImage(name) {
  const item = ITEMS[name];
  return item && item.image ? item.image : null;
}

const EQUIP_DISPLAY_ORDER = [
  'Greatsword', 'Sword', 'Dagger', 'Bow', 'Magicbook', 'Orb', 'Mace', 'Staff',
  'Guarder', 'Helmet', 'Torso', 'Pants', 'Gloves', 'Boots', 'Shoulder', 'Cape'
];

function getSeriesEquipmentItems(data) {
  const entries = [];

  Object.entries(data.weapons).forEach(([category, itemName]) => {
    entries.push({
      name: itemName,
      label: WEAPON_SUBTYPES[category] || category,
      kind: 'weapon',
      category: category
    });
  });

  if (data.guarders['Guarder']) {
    entries.push({
      name: data.guarders['Guarder'],
      label: WEAPON_SUBTYPES['Guarder'] || '臂甲',
      kind: 'guarder',
      category: 'Guarder'
    });
  }

  entries.sort((a, b) => {
    const ia = EQUIP_DISPLAY_ORDER.indexOf(a.category);
    const ib = EQUIP_DISPLAY_ORDER.indexOf(b.category);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  return entries;
}

function renderSeriesDetail() {
  const panel = document.getElementById('series-detail-panel');
  if (!currentSeries) {
    panel.innerHTML = `<div class="empty-state"><p>請從左側挑選裝備系列來開始配置</p></div>`;
    return;
  }
  
  const data = ALL_SERIES[currentSeries];
  const grade = (data.grade || 'Normal').toLowerCase();
  const race = data.race || getSeriesRace(currentSeries);
  const equipmentItems = getSeriesEquipmentItems(data);
  
  panel.innerHTML = `
    <div class="fade-in">
      <h3 style="margin-bottom: 20px; font-size: 18px;" class="${grade}">
        ✨ 配置【${currentSeries} 系列】裝備
      </h3>
      <div style="margin-bottom: 14px; display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border: 1px solid var(--border-dim); border-radius: 999px; color: var(--text-secondary); font-size: 12px; background: rgba(0,0,0,0.18);">
        <span style="width: 8px; height: 8px; border-radius: 999px; background: var(--accent-cyan);"></span>
        ${race}
      </div>
      
      <div style="background: rgba(0,0,0,0.25); padding: 20px; border-radius: 8px; border: 1px solid var(--border-dim);">
        <label style="display:block; margin-bottom:10px; color:var(--text-secondary); font-weight: bold;">⚔️ 點選裝備直接加入或移除購物車</label>
        <div class="equipment-option-grid">
          ${equipmentItems.map(item => {
            const itemQty = cart[item.name] || 0;
            const itemImage = getItemImage(item.name);
            return `
              <div class="equipment-option-card ${itemQty > 0 ? 'active' : ''}" onclick="adjustCartItem('${escapeHtml(item.name)}', 1)">
                <div class="equipment-option-thumb grade-${grade}">
                  ${itemImage ? `<img src="${itemImage}" loading="lazy" alt="${escapeHtml(item.name)}">` : `<div class="default-item-icon">⚔</div>`}
                  <span class="equipment-option-qty">${itemQty}</span>
                </div>
                <div class="equipment-option-meta">
                  <div class="equipment-option-name ${grade}">${escapeHtml(item.name)}</div>
                  <div class="equipment-option-category">${escapeHtml(item.label)}</div>
                </div>
                <div class="equipment-option-controls">
                  <button class="equipment-option-btn" type="button" ${itemQty <= 0 ? 'disabled' : ''} onclick="event.stopPropagation(); adjustCartItem('${escapeHtml(item.name)}', -1)">−</button>
                  <button class="equipment-option-btn primary" type="button" onclick="event.stopPropagation(); adjustCartItem('${escapeHtml(item.name)}', 1)">＋</button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function refreshCraftViews() {
  renderCart();
  if (currentSeries) {
    renderSeriesDetail();
  }
}

function adjustCartItem(name, delta) {
  const currentQty = cart[name] || 0;
  const nextQty = currentQty + delta;

  if (nextQty <= 0) {
    delete cart[name];
  } else {
    cart[name] = nextQty;
  }

  refreshCraftViews();
}

function _addToCart(name) {
  adjustCartItem(name, 1);
}

function updateCartQty(name, delta) {
  adjustCartItem(name, delta);
}

function removeFromCart(name) {
  delete cart[name];
  refreshCraftViews();
}

function renderCart() {
  const container = document.getElementById('cart-container');
  let html = '';
  const aggMats = {};

  if (Object.keys(cart).length === 0) {
    container.innerHTML = '<div class="empty-state"><p>購物車為空，請從上方裝備區選擇想要製作的裝備</p></div>';
    renderMaterials({});
    return;
  }

  for (let [name, qty] of Object.entries(cart)) {
    const recipe = RECIPES[name];
    const grade = recipe ? recipe.grade.toLowerCase() : 'normal';
    const imageSrc = getItemImage(name);

    html += `
      <div class="cart-item fade-in">
        <div class="cart-item-info">
          <div class="material-icon grade-${grade}" style="width: 44px; height: 44px;">
            ${imageSrc ? `<img src="${imageSrc}">` : `<div class="default-item-icon">⚔</div>`}
          </div>
          <div>
             <div class="material-name ${grade}" style="font-size: 15px;">${escapeHtml(name)}</div>
             <div style="font-size: 11px; color: var(--text-dim); margin-top: 2px;">單件需求材料 x ${qty}</div>
          </div>
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

  const materialPriority = (matName) => {
    if (matName.startsWith('達人閃耀的')) return 0;
    if (matName === '鞣製的強固龍族鱗片') return 1;
    return 2;
  };

  const sortedMaterials = Object.entries(aggMats).sort((left, right) => {
    const priorityDiff = materialPriority(left[0]) - materialPriority(right[0]);
    if (priorityDiff !== 0) return priorityDiff;
    return left[0].localeCompare(right[0], 'zh-Hant-TW');
  });

  for (let [matName, totalQty] of sortedMaterials) {
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
      infoEl.textContent = '載入對應材料後方能計算總額';
    } else {
      infoEl.textContent = `輸入材料市價以試算總和 (${filledCount}/${inputs.length})`;
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
  if (Object.keys(cart).length === 0) return showToast('購物車清單目前為空');
  
  let text = `═══ AION2 系列裝備成本估算報表 ═══\n【規劃製作清單】\n`;
  for(let [name, qty] of Object.entries(cart)) {
    text += `- ${name} (數目: ${qty})\n`;
  }
  text += `──────────────────\n【需求總材料預算明細】\n`;
  
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
      text += ` | 單價: ${price.toLocaleString()} | 預設: ${subtotal.toLocaleString()}\n`;
    } else {
      text += ` | 金額待補\n`;
    }
  });
  
  text += `──────────────────\n`;
  text += `💰 總評估成本約為：${total.toLocaleString()} 基納\n`;
  text += `═══════════════════\n`;
  
  navigator.clipboard.writeText(text)
    .then(() => showToast('報表內容已複製到您的剪貼簿！'))
    .catch(() => showToast('抱歉，複製發生錯誤，請手動複製'));
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
