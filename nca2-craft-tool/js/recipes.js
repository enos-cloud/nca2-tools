/**
 * AION2 裝備製作配方資料
 * 包含每個可製作裝備的材料清單與數量
 */
const RECIPES = {
  // ==================== 巨劍 (Greatsword) ====================
  "夔龍王巨劍": {
    grade: "Epic",
    category: "Greatsword",
    materials: [
      { name: "達人閃耀的奧里哈康巨劍", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強固龍族角", qty: 122 },
      { name: "憤怒思念", qty: 18 },
      { name: "憤怒意志", qty: 27 },
      { name: "憤怒自我", qty: 42 },
      { name: "發狂的憤怒巫蠱", qty: 19 },
      { name: "燦爛的奧里哈康礦石", qty: 121 },
      { name: "燦爛的奧德", qty: 70 }
    ]
  },
  "應龍王巨劍": {
    grade: "Epic",
    category: "Greatsword",
    materials: [
      { name: "達人閃耀的奧里哈康巨劍", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強結龍族角", qty: 122 },
      { name: "憤怒思念", qty: 18 },
      { name: "憤怒意志", qty: 27 },
      { name: "憤怒自我", qty: 42 },
      { name: "發狂的憤怒心血", qty: 19 },
      { name: "燦爛的奧里哈康礦石", qty: 121 },
      { name: "燦爛的奧德", qty: 70 }
    ]
  },

  // ==================== 長劍 (Sword) ====================
  "夔龍王長劍": {
    grade: "Epic",
    category: "Sword",
    materials: [
      { name: "達人閃耀的奧里哈康長劍", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強固龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒巫蠱", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },
  "應龍王長劍": {
    grade: "Epic",
    category: "Sword",
    materials: [
      { name: "達人閃耀的奧里哈康長劍", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強結龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒心血", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },

  // ==================== 短劍 (Dagger) ====================
  "夔龍王短劍": {
    grade: "Epic",
    category: "Dagger",
    materials: [
      { name: "達人閃耀的奧里哈康短劍", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強固龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒巫蠱", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },
  "應龍王短劍": {
    grade: "Epic",
    category: "Dagger",
    materials: [
      { name: "達人閃耀的奧里哈康短劍", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強結龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒心血", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },

  // ==================== 弓 (Bow) ====================
  "夔龍王弓": {
    grade: "Epic",
    category: "Bow",
    materials: [
      { name: "達人閃耀的菩提弓", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "強化的強固龍族鱗片", qty: 122 },
      { name: "憤怒思念", qty: 18 },
      { name: "憤怒意志", qty: 27 },
      { name: "憤怒自我", qty: 42 },
      { name: "發狂的憤怒巫蠱", qty: 19 },
      { name: "燦爛的菩提木頭", qty: 121 },
      { name: "燦爛的奧德", qty: 70 }
    ]
  },
  "應龍王弓": {
    grade: "Epic",
    category: "Bow",
    materials: [
      { name: "達人閃耀的菩提弓", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "強化的強固龍族鱗片", qty: 122 },
      { name: "憤怒思念", qty: 18 },
      { name: "憤怒意志", qty: 27 },
      { name: "憤怒自我", qty: 42 },
      { name: "發狂的憤怒心血", qty: 19 },
      { name: "燦爛的菩提木頭", qty: 121 },
      { name: "燦爛的奧德", qty: 70 }
    ]
  },

  // ==================== 魔法書 (Magicbook) ====================
  "夔龍王魔法書": {
    grade: "Epic",
    category: "Magicbook",
    materials: [
      { name: "達人閃耀的奧里哈康魔法書", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強固龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒巫蠱", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },
  "應龍王魔法書": {
    grade: "Epic",
    category: "Magicbook",
    materials: [
      { name: "達人閃耀的奧里哈康魔法書", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強結龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒心血", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },

  // ==================== 法珠 (Orb) ====================
  "夔龍王法珠": {
    grade: "Epic",
    category: "Orb",
    materials: [
      { name: "達人閃耀的奧里哈康法珠", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強固龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒巫蠱", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },
  "應龍王法珠": {
    grade: "Epic",
    category: "Orb",
    materials: [
      { name: "達人閃耀的奧里哈康法珠", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強結龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒心血", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },

  // ==================== 釘錘 (Mace) ====================
  "夔龍王釘錘": {
    grade: "Epic",
    category: "Mace",
    materials: [
      { name: "達人閃耀的奧里哈康釘錘", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強固龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒巫蠱", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },
  "應龍王釘錘": {
    grade: "Epic",
    category: "Mace",
    materials: [
      { name: "達人閃耀的奧里哈康釘錘", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強結龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒心血", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },

  // ==================== 法杖 (Staff) ====================
  "夔龍王法杖": {
    grade: "Epic",
    category: "Staff",
    materials: [
      { name: "達人閃耀的菩提法杖", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "強化的強固龍族鱗片", qty: 122 },
      { name: "憤怒思念", qty: 18 },
      { name: "憤怒意志", qty: 27 },
      { name: "憤怒自我", qty: 42 },
      { name: "發狂的憤怒巫蠱", qty: 19 },
      { name: "燦爛的菩提木頭", qty: 121 },
      { name: "燦爛的奧德", qty: 70 }
    ]
  },
  "應龍王法杖": {
    grade: "Epic",
    category: "Staff",
    materials: [
      { name: "達人閃耀的菩提法杖", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "強化的強固龍族鱗片", qty: 122 },
      { name: "憤怒思念", qty: 18 },
      { name: "憤怒意志", qty: 27 },
      { name: "憤怒自我", qty: 42 },
      { name: "發狂的憤怒巫蠱", qty: 19 },
      { name: "燦爛的菩提木頭", qty: 121 },
      { name: "燦爛的奧德", qty: 70 }
    ]
  },

  // ==================== 臂甲 (Guarder) ====================
  "夔龍王臂甲": {
    grade: "Epic",
    category: "Guarder",
    materials: [
      { name: "達人閃耀的奧里哈康臂甲", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強固龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒巫蠱", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  },
  "應龍王臂甲": {
    grade: "Epic",
    category: "Guarder",
    materials: [
      { name: "達人閃耀的奧里哈康臂甲", qty: 5 },
      { name: "達人最上級提煉石", qty: 50 },
      { name: "提煉的強結龍族角", qty: 98 },
      { name: "憤怒思念", qty: 14 },
      { name: "憤怒意志", qty: 22 },
      { name: "憤怒自我", qty: 34 },
      { name: "發狂的憤怒心血", qty: 15 },
      { name: "燦爛的奧里哈康礦石", qty: 97 },
      { name: "燦爛的奧德", qty: 56 }
    ]
  }
};

Object.keys(RECIPES).forEach(name => {
  if (!name.startsWith("應龍王") && !name.startsWith("夔龍王")) {
    delete RECIPES[name];
  }
});

const ARMOR_RECIPE_SERIES_NAMES = [
  "應龍王",
  "夔龍王",
];

const ARMOR_SLOT_CONFIGS = {
  Helmet: {
    suffix: "頭盔",
    refinerQty: 21,
    supportMaterial: "鞣製的強固龍族皮革",
    supportQty: 51,
    thoughtQty: 7,
    willQty: 12,
    selfQty: 17,
    rageQty: 8,
    oreQty: 51,
    odQty: 29
  },
  Torso: {
    suffix: "胸甲",
    refinerQty: 33,
    supportMaterial: "鞣製的強固龍族皮革",
    supportQty: 81,
    thoughtQty: 12,
    willQty: 18,
    selfQty: 28,
    rageQty: 13,
    oreQty: 81,
    odQty: 47
  },
  Pants: {
    suffix: "腿甲",
    refinerQty: 25,
    supportMaterial: "鞣製的強固龍族鱗片",
    supportQty: 61,
    thoughtQty: 9,
    willQty: 14,
    selfQty: 21,
    rageQty: 10,
    oreQty: 61,
    odQty: 35
  },
  Gloves: {
    suffix: "手套",
    refinerQty: 17,
    supportMaterial: "鞣製的強固龍族鱗片",
    supportQty: 41,
    thoughtQty: 6,
    willQty: 10,
    selfQty: 14,
    rageQty: 6,
    oreQty: 41,
    odQty: 23
  },
  Boots: {
    suffix: "長靴",
    refinerQty: 21,
    supportMaterial: "鞣製的強固龍族皮革",
    supportQty: 51,
    thoughtQty: 7,
    willQty: 13,
    selfQty: 18,
    rageQty: 8,
    oreQty: 51,
    odQty: 29
  },
  Shoulder: {
    suffix: "肩甲",
    refinerQty: 17,
    supportMaterial: "鞣製的強固龍族鱗片",
    supportQty: 41,
    thoughtQty: 6,
    willQty: 10,
    selfQty: 14,
    rageQty: 6,
    oreQty: 41,
    odQty: 23
  },
  Cape: {
    suffix: "披風",
    refinerQty: 17,
    supportMaterial: "鞣製的強固龍族皮革",
    supportQty: 41,
    thoughtQty: 6,
    willQty: 10,
    selfQty: 14,
    rageQty: 6,
    oreQty: 41,
    odQty: 23
  }
};

function getArmorRageMaterial(seriesName) {
  return seriesName.includes("應龍") ? "發狂的憤怒心血" : "發狂的憤怒巫蠱";
}

function addArmorRecipe(target, seriesName, slotKey, config) {
  const itemName = `${seriesName}${config.suffix}`;
  target[itemName] = {
    grade: "Epic",
    category: slotKey,
    materials: [
      { name: `達人閃耀的奧里哈康${config.suffix}`, qty: 5 },
      { name: "達人最上級提煉石", qty: config.refinerQty },
      { name: config.supportMaterial, qty: config.supportQty },
      { name: "憤怒思念", qty: config.thoughtQty },
      { name: "憤怒意志", qty: config.willQty },
      { name: "憤怒自我", qty: config.selfQty },
      { name: getArmorRageMaterial(seriesName), qty: config.rageQty },
      { name: "燦爛的奧里哈康礦石", qty: config.oreQty },
      { name: "燦爛的奧德", qty: config.odQty }
    ]
  };
}

ARMOR_RECIPE_SERIES_NAMES.forEach(seriesName => {
  Object.entries(ARMOR_SLOT_CONFIGS).forEach(([slotKey, config]) => {
    addArmorRecipe(RECIPES, seriesName, slotKey, config);
  });
});
