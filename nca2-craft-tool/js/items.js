/**
 * AION2 道具名稱與圖片路徑映射
 * 圖片路徑相對於專案根目錄
 */
const ITEMS = {
  // ========== 武器 ==========
  // 巨劍 (Greatsword)
  "應龍王巨劍":     { image: "images/weapons/Greatsword/YinglongKingGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "夔龍王巨劍":     { image: "images/weapons/Greatsword/KuirongKingGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "盧德萊絕滅刀":   { image: "images/weapons/Greatsword/RudraGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "守衛者軍團長巨劍": { image: "images/weapons/Greatsword/GuardianBGGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "執政官軍團長巨劍": { image: "images/weapons/Greatsword/ArchonBGGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "被侵蝕的支配者捕食巨劍": { image: "images/weapons/Greatsword/ErodedDominatorGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },

  // 長劍 (Sword)
  "應龍王長劍":     { image: "images/weapons/Sword/YinglongKingSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "夔龍王長劍":     { image: "images/weapons/Sword/KuirongKingSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "盧德萊鱗片劍":   { image: "images/weapons/Sword/RudraSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "守衛者軍團長長劍": { image: "images/weapons/Sword/GuardianBGSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "執政官軍團長長劍": { image: "images/weapons/Sword/ArchonBGSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "被侵蝕的支配者灼熱劍": { image: "images/weapons/Sword/ErodedDominatorSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },

  // 短劍 (Dagger)
  "應龍王短劍":     { image: "images/weapons/Dagger/YinglongKingDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "夔龍王短劍":     { image: "images/weapons/Dagger/KuirongKingDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "盧德萊腳爪":     { image: "images/weapons/Dagger/RudraDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "守衛者軍團長短劍": { image: "images/weapons/Dagger/GuardianBGDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "執政官軍團長短劍": { image: "images/weapons/Dagger/ArchonBGDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "被侵蝕的支配者惡意": { image: "images/weapons/Dagger/ErodedDominatorDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },

  // 弓 (Bow)
  "應龍王弓":       { image: "images/weapons/Bow/YinglongKingBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "夔龍王弓":       { image: "images/weapons/Bow/KuirongKingBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "盧德萊絕命弓":   { image: "images/weapons/Bow/RudraBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "守衛者軍團長弓":   { image: "images/weapons/Bow/GuardianBGBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "執政官軍團長弓":   { image: "images/weapons/Bow/ArchonBGBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "被侵蝕的支配者灼熱弓": { image: "images/weapons/Bow/ErodedDominatorBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },

  // 魔法書 (Magicbook)
  "應龍王魔法書":    { image: "images/weapons/Magicbook/YinglongKingSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "夔龍王魔法書":    { image: "images/weapons/Magicbook/KuirongKingSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "盧德萊禁書":     { image: "images/weapons/Magicbook/RudraSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "守衛者軍團長魔法書": { image: "images/weapons/Magicbook/GuardianBGSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "執政官軍團長魔法書": { image: "images/weapons/Magicbook/ArchonBGSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "被侵蝕的支配者炎火": { image: "images/weapons/Magicbook/ErodedDominatorSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },

  // 法珠 (Orb)
  "應龍王法珠":     { image: "images/weapons/Orb/YinglongKingOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "夔龍王法珠":     { image: "images/weapons/Orb/KuirongKingOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "盧德萊深淵玉":   { image: "images/weapons/Orb/RudraOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "守衛者軍團長法珠": { image: "images/weapons/Orb/GuardianBGOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "執政官軍團長法珠": { image: "images/weapons/Orb/ArchonBGOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "被侵蝕的支配者紅焰玉": { image: "images/weapons/Orb/ErodedDominatorOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },

  // 釘錘 (Mace)
  "應龍王釘錘":     { image: "images/weapons/Mace/YinglongKingMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "夔龍王釘錘":     { image: "images/weapons/Mace/KuirongKingMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "盧德萊滅錘":     { image: "images/weapons/Mace/RudraMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "守衛者軍團長釘錘": { image: "images/weapons/Mace/GuardianBGMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "執政官軍團長釘錘": { image: "images/weapons/Mace/ArchonBGMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "被侵蝕的支配者赤熱錘": { image: "images/weapons/Mace/ErodedDominatorMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },

  // 法杖 (Staff)
  "應龍王法杖":     { image: "images/weapons/Staff/YinglongKingStaff.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "夔龍王法杖":     { image: "images/weapons/Staff/KuirongKingStaff.png", grade: "Epic", type: "weapon", subtype: "Staff" },

  // 臂甲 (Guarder)
  "應龍王臂甲":     { image: "images/weapons/Guarder/YinglongKingGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "夔龍王臂甲":     { image: "images/weapons/Guarder/KuirongKingGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "盧德萊心臟":     { image: "images/weapons/Guarder/RudraGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "守衛者軍團長臂甲": { image: "images/weapons/Guarder/GuardianBGGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "執政官軍團長臂甲": { image: "images/weapons/Guarder/ArchonBGGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "被侵蝕的支配者鎖鏈": { image: "images/weapons/Guarder/ErodedDominatorGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },

  // ========== 製作材料 ==========
  "達人閃耀的菩提弓": { image: null, grade: "Epic", type: "material" },
  "達人閃耀的菩提法杖": { image: null, grade: "Epic", type: "material" },
  "達人閃耀的奧里哈康頭盔": { image: "images/materials/DaRenShanYaoDeAoLiHaKangTouKui.png", grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康胸甲": { image: "images/materials/DaRenShanYaoDeAoLiHaKangXiongJia.png", grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康腿甲": { image: "images/materials/DaRenShanYaoDeAoLiHaKangTuiJia.png", grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康手套": { image: "images/materials/DaRenShanYaoDeAoLiHaKangShouTao.png", grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康長靴": { image: "images/materials/DaRenShanYaoDeAoLiHaKangZhangXue.png", grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康肩甲": { image: "images/materials/DaRenShanYaoDeAoLiHaKangJianJia.png", grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康披風": { image: "images/materials/DaRenShanYaoDeAoLiHaKangPiFeng.png", grade: "Unique", type: "material" },
  "燦爛的菩提木頭": { image: null, grade: "Unique", type: "material" },
  "達人最上級提煉石": { image: "images/materials/MasterSupremeRefinerStone_Bind.png", grade: "Unique", type: "material" },
  "達人最上級提煉石":       { image: "images/materials/MasterSupremeRefinerStone.png", grade: "Unique", type: "material" },
  "提煉的強固龍族角":       { image: "images/materials/RefinedSolidBalaurHorn.png", grade: "Unique", type: "material" },
  "提煉的強結龍族角":       { image: "images/materials/RefinedFirmBalaurHorn.png", grade: "Unique", type: "material" },
  "鞣製的強固龍族皮革":     { image: "images/materials/TannedSolidBalaurLeather.png", grade: "Unique", type: "material" },
  "鞣製的強固龍族鱗片":     { image: null, grade: "Unique", type: "material" },
  "鞣製的強結龍族皮革":     { image: "images/materials/TannedFirmBalaurLeather.png", grade: "Unique", type: "material" },
  "強化的強固龍族鱗片":     { image: "images/materials/EnhancedSolidBalaurScale.png", grade: "Unique", type: "material" },
  "強化的強結龍族鱗片":     { image: "images/materials/EnhancedFirmBalaurScale.png", grade: "Unique", type: "material" },
  "憤怒思念":         { image: "images/materials/AngerThought_Bind.png", grade: "Unique", type: "material" },
  "憤怒思念":               { image: "images/materials/AngerThought.png", grade: "Unique", type: "material" },
  "憤怒意志":         { image: "images/materials/AngerWill_Bind.png", grade: "Unique", type: "material" },
  "憤怒意志":               { image: "images/materials/AngerWill.png", grade: "Unique", type: "material" },
  "憤怒自我":         { image: "images/materials/AngerSelf_Bind.png", grade: "Unique", type: "material" },
  "憤怒自我":               { image: "images/materials/AngerSelf.png", grade: "Unique", type: "material" },
  "憤怒昇華":         { image: "images/materials/AngerSublimation_Bind.png", grade: "Unique", type: "material" },
  "憤怒昇華":               { image: "images/materials/AngerSublimation.png", grade: "Unique", type: "material" },
  "憤怒願望":         { image: "images/materials/AngerDesire_Bind.png", grade: "Unique", type: "material" },
  "憤怒願望":               { image: "images/materials/AngerDesire.png", grade: "Unique", type: "material" },
  "發狂的憤怒巫蠱":   { image: "images/materials/CrazyAngerVoodoo_Bind.png", grade: "Epic", type: "material" },
  "發狂的憤怒巫蠱":         { image: "images/materials/CrazyAngerVoodoo.png", grade: "Epic", type: "material" },
  "發狂的憤怒心血":   { image: "images/materials/CrazyAngerBlood_Bind.png", grade: "Epic", type: "material" },
  "發狂的憤怒心血":         { image: "images/materials/CrazyAngerBlood.png", grade: "Epic", type: "material" },
  "強固的龍族皮革":   { image: "images/materials/SolidBalaurLeather_Bind.png", grade: "Unique", type: "material" },
  "強固的龍族皮革":         { image: "images/materials/SolidBalaurLeather.png", grade: "Unique", type: "material" },
  "強固的龍族角":     { image: "images/materials/SolidBalaurHorn_Bind.png", grade: "Unique", type: "material" },
  "強固的龍族角":           { image: "images/materials/SolidBalaurHorn.png", grade: "Unique", type: "material" },
  "強固的龍族鱗片":   { image: "images/materials/SolidBalaurScale_Bind.png", grade: "Unique", type: "material" },
  "強固的龍族鱗片":         { image: "images/materials/SolidBalaurScale.png", grade: "Unique", type: "material" },
  "強結的龍族皮革":   { image: "images/materials/FirmBalaurLeather_Bind.png", grade: "Unique", type: "material" },
  "強結的龍族皮革":         { image: "images/materials/FirmBalaurLeather.png", grade: "Unique", type: "material" },
  "強結的龍族角":     { image: "images/materials/FirmBalaurHorn_Bind.png", grade: "Unique", type: "material" },
  "強結的龍族角":           { image: "images/materials/FirmBalaurHorn.png", grade: "Unique", type: "material" },
  "強結的龍族鱗片":   { image: "images/materials/FirmBalaurScale_Bind.png", grade: "Unique", type: "material" },
  "強結的龍族鱗片":         { image: "images/materials/FirmBalaurScale.png", grade: "Unique", type: "material" },

  // 暫無圖片的材料（使用預設）
  "達人閃耀的奧里哈康巨劍": { image: null, grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康長劍": { image: null, grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康短劍": { image: null, grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康弓":   { image: null, grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康魔法書": { image: null, grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康法珠": { image: null, grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康釘錘": { image: null, grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康法杖": { image: null, grade: "Unique", type: "material" },
  "達人閃耀的奧里哈康臂甲": { image: null, grade: "Unique", type: "material" },
  "燦爛的奧里哈康礦石":     { image: null, grade: "Unique", type: "material" },
  "燦爛的奧德":       { image: null, grade: "Unique", type: "material" },
};

const ARMOR_SERIES_NAMES = ["應龍王", "夔龍王"];

const ARMOR_SLOT_SUFFIXES = {
  Helmet: "頭盔",
  Torso: "胸甲",
  Pants: "腿甲",
  Gloves: "手套",
  Boots: "長靴",
  Shoulder: "肩甲",
  Cape: "披風"
};

function registerVariantGroup(target, folder, subtype, baseNames, slotSuffix, grade = "Epic") {
  baseNames.forEach(baseName => {
    const itemName = `${baseName}${slotSuffix}`;
    target[itemName] = {
      image: `images/${folder}/${subtype}/${itemName}.png`,
      grade,
      type: folder === "armor" ? "armor" : "accessory",
      subtype
    };
  });
}

Object.entries(ARMOR_SLOT_SUFFIXES).forEach(([subtype, slotSuffix]) => {
  registerVariantGroup(ITEMS, "armor", subtype, ARMOR_SERIES_NAMES, slotSuffix, subtype === "Cape" ? "Unique" : "Epic");
});

/**
 * 武器子分類的中文名映射
 */
const WEAPON_SUBTYPES = {
  "Greatsword": "巨劍",
  "Sword":      "長劍",
  "Dagger":     "短劍",
  "Bow":        "弓",
  "Magicbook":  "魔法書",
  "Orb":        "法珠",
  "Mace":       "釘錘",
  "Staff":      "法杖",
  "Guarder":    "臂甲",
  "Helmet":     "頭盔",
  "Torso":      "胸甲",
  "Pants":      "腿甲",
  "Gloves":     "手套",
  "Boots":      "長靴",
  "Shoulder":   "肩甲",
  "Cape":       "披風"
};

/**
 * 品級色彩映射
 */
const GRADE_COLORS = {
  "Epic":   "#ffa500", // 英雄 (橘色)
  "Unique": "#ffa500", // 獨特 (黃色)
  "Rare":   "#4d9fff",
  "Normal": "#cccccc"
};
