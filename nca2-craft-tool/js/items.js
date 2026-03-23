/**
 * AION2 道具名稱與圖片路徑映射
 * 圖片路徑相對於專案根目錄
 */
const ITEMS = {
  // ========== 武器 ==========
  // 巨劍 (Greatsword)
  "應龍王巨劍":     { image: "images/weapons/Greatsword/YinglongKingGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "夔龍王巨劍":     { image: "images/weapons/Greatsword/KuirongKingGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "閃耀的應龍王巨劍": { image: "images/weapons/Greatsword/ShiningYinglongKingGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "閃耀的夔龍王巨劍": { image: "images/weapons/Greatsword/ShiningKuirongKingGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "應龍霸王巨劍":   { image: "images/weapons/Greatsword/YinglongEmperorGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "夔龍霸王巨劍":   { image: "images/weapons/Greatsword/KuirongEmperorGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "閃耀的應龍霸王巨劍": { image: "images/weapons/Greatsword/ShiningYinglongEmperorGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "閃耀的夔龍霸王巨劍": { image: "images/weapons/Greatsword/ShiningKuirongEmperorGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "盧德萊絕滅刀":   { image: "images/weapons/Greatsword/RudraGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "守衛者軍團長巨劍": { image: "images/weapons/Greatsword/GuardianBGGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "執政官軍團長巨劍": { image: "images/weapons/Greatsword/ArchonBGGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "被侵蝕的支配者捕食巨劍": { image: "images/weapons/Greatsword/ErodedDominatorGreatsword.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },

  // 長劍 (Sword)
  "應龍王長劍":     { image: "images/weapons/Sword/YinglongKingSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "夔龍王長劍":     { image: "images/weapons/Sword/KuirongKingSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "閃耀的應龍王長劍": { image: "images/weapons/Sword/ShiningYinglongKingSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "閃耀的夔龍王長劍": { image: "images/weapons/Sword/ShiningKuirongKingSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "應龍霸王長劍":   { image: "images/weapons/Sword/YinglongEmperorSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "夔龍霸王長劍":   { image: "images/weapons/Sword/KuirongEmperorSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "閃耀的應龍霸王長劍": { image: "images/weapons/Sword/ShiningYinglongEmperorSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "閃耀的夔龍霸王長劍": { image: "images/weapons/Sword/ShiningKuirongEmperorSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "盧德萊鱗片劍":   { image: "images/weapons/Sword/RudraSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "守衛者軍團長長劍": { image: "images/weapons/Sword/GuardianBGSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "執政官軍團長長劍": { image: "images/weapons/Sword/ArchonBGSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "被侵蝕的支配者灼熱劍": { image: "images/weapons/Sword/ErodedDominatorSword.png", grade: "Epic", type: "weapon", subtype: "Sword" },

  // 短劍 (Dagger)
  "應龍王短劍":     { image: "images/weapons/Dagger/YinglongKingDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "夔龍王短劍":     { image: "images/weapons/Dagger/KuirongKingDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "閃耀的應龍王短劍": { image: "images/weapons/Dagger/ShiningYinglongKingDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "閃耀的夔龍王短劍": { image: "images/weapons/Dagger/ShiningKuirongKingDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "應龍霸王短劍":   { image: "images/weapons/Dagger/YinglongEmperorDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "夔龍霸王短劍":   { image: "images/weapons/Dagger/KuirongEmperorDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "閃耀的應龍霸王短劍": { image: "images/weapons/Dagger/ShiningYinglongEmperorDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "閃耀的夔龍霸王短劍": { image: "images/weapons/Dagger/ShiningKuirongEmperorDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "盧德萊腳爪":     { image: "images/weapons/Dagger/RudraDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "守衛者軍團長短劍": { image: "images/weapons/Dagger/GuardianBGDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "執政官軍團長短劍": { image: "images/weapons/Dagger/ArchonBGDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "被侵蝕的支配者惡意": { image: "images/weapons/Dagger/ErodedDominatorDagger.png", grade: "Epic", type: "weapon", subtype: "Dagger" },

  // 弓 (Bow)
  "應龍王弓":       { image: "images/weapons/Bow/YinglongKingBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "夔龍王弓":       { image: "images/weapons/Bow/KuirongKingBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "閃耀的應龍王弓":   { image: "images/weapons/Bow/ShiningYinglongKingBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "閃耀的夔龍王弓":   { image: "images/weapons/Bow/ShiningKuirongKingBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "應龍霸王弓":     { image: "images/weapons/Bow/YinglongEmperorBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "夔龍霸王弓":     { image: "images/weapons/Bow/KuirongEmperorBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "閃耀的應龍霸王弓": { image: "images/weapons/Bow/ShiningYinglongEmperorBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "閃耀的夔龍霸王弓": { image: "images/weapons/Bow/ShiningKuirongEmperorBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "盧德萊絕命弓":   { image: "images/weapons/Bow/RudraBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "守衛者軍團長弓":   { image: "images/weapons/Bow/GuardianBGBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "執政官軍團長弓":   { image: "images/weapons/Bow/ArchonBGBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "被侵蝕的支配者灼熱弓": { image: "images/weapons/Bow/ErodedDominatorBow.png", grade: "Epic", type: "weapon", subtype: "Bow" },

  // 魔法書 (Magicbook)
  "應龍王魔法書":    { image: "images/weapons/Magicbook/YinglongKingSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "夔龍王魔法書":    { image: "images/weapons/Magicbook/KuirongKingSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "閃耀的應龍王魔法書": { image: "images/weapons/Magicbook/ShiningYinglongKingSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "閃耀的夔龍王魔法書": { image: "images/weapons/Magicbook/ShiningKuirongKingSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "應龍霸王魔法書":  { image: "images/weapons/Magicbook/YinglongEmperorSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "夔龍霸王魔法書":  { image: "images/weapons/Magicbook/KuirongEmperorSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "閃耀的應龍霸王魔法書": { image: "images/weapons/Magicbook/ShiningYinglongEmperorSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "閃耀的夔龍霸王魔法書": { image: "images/weapons/Magicbook/ShiningKuirongEmperorSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "盧德萊禁書":     { image: "images/weapons/Magicbook/RudraSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "守衛者軍團長魔法書": { image: "images/weapons/Magicbook/GuardianBGSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "執政官軍團長魔法書": { image: "images/weapons/Magicbook/ArchonBGSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "被侵蝕的支配者炎火": { image: "images/weapons/Magicbook/ErodedDominatorSpellbook.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },

  // 法珠 (Orb)
  "應龍王法珠":     { image: "images/weapons/Orb/YinglongKingOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "夔龍王法珠":     { image: "images/weapons/Orb/KuirongKingOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "閃耀的應龍王法珠": { image: "images/weapons/Orb/ShiningYinglongKingOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "閃耀的夔龍王法珠": { image: "images/weapons/Orb/ShiningKuirongKingOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "應龍霸王法珠":   { image: "images/weapons/Orb/YinglongEmperorOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "夔龍霸王法珠":   { image: "images/weapons/Orb/KuirongEmperorOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "閃耀的應龍霸王法珠": { image: "images/weapons/Orb/ShiningYinglongEmperorOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "閃耀的夔龍霸王法珠": { image: "images/weapons/Orb/ShiningKuirongEmperorOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "盧德萊深淵玉":   { image: "images/weapons/Orb/RudraOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "守衛者軍團長法珠": { image: "images/weapons/Orb/GuardianBGOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "執政官軍團長法珠": { image: "images/weapons/Orb/ArchonBGOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "被侵蝕的支配者紅焰玉": { image: "images/weapons/Orb/ErodedDominatorOrb.png", grade: "Epic", type: "weapon", subtype: "Orb" },

  // 釘錘 (Mace)
  "應龍王釘錘":     { image: "images/weapons/Mace/YinglongKingMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "夔龍王釘錘":     { image: "images/weapons/Mace/KuirongKingMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "閃耀的應龍王釘錘": { image: "images/weapons/Mace/ShiningYinglongKingMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "閃耀的夔龍王釘錘": { image: "images/weapons/Mace/ShiningKuirongKingMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "應龍霸王釘錘":   { image: "images/weapons/Mace/YinglongEmperorMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "夔龍霸王釘錘":   { image: "images/weapons/Mace/KuirongEmperorMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "閃耀的應龍霸王釘錘": { image: "images/weapons/Mace/ShiningYinglongEmperorMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "閃耀的夔龍霸王釘錘": { image: "images/weapons/Mace/ShiningKuirongEmperorMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "盧德萊滅錘":     { image: "images/weapons/Mace/RudraMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "守衛者軍團長釘錘": { image: "images/weapons/Mace/GuardianBGMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "執政官軍團長釘錘": { image: "images/weapons/Mace/ArchonBGMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "被侵蝕的支配者赤熱錘": { image: "images/weapons/Mace/ErodedDominatorMace.png", grade: "Epic", type: "weapon", subtype: "Mace" },

  // 法杖 (Staff)
  "應龍王法杖":     { image: "images/weapons/Staff/YinglongKingStaff.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "夔龍王法杖":     { image: "images/weapons/Staff/KuirongKingStaff.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "閃耀的應龍王法杖": { image: "images/weapons/Staff/ShiningYinglongKingStaff.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "閃耀的夔龍王法杖": { image: "images/weapons/Staff/ShiningKuirongKingStaff.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "應龍霸王法杖":   { image: "images/weapons/Staff/YinglongEmperorStaff.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "夔龍霸王法杖":   { image: "images/weapons/Staff/KuirongEmperorStaff.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "閃耀的應龍霸王法杖": { image: "images/weapons/Staff/ShiningYinglongEmperorStaff.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "閃耀的夔龍霸王法杖": { image: "images/weapons/Staff/ShiningKuirongEmperorStaff.png", grade: "Epic", type: "weapon", subtype: "Staff" },

  // 臂甲 (Guarder)
  "應龍王臂甲":     { image: "images/weapons/Guarder/YinglongKingGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "夔龍王臂甲":     { image: "images/weapons/Guarder/KuirongKingGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "閃耀的應龍王臂甲": { image: "images/weapons/Guarder/ShiningYinglongKingGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "閃耀的夔龍王臂甲": { image: "images/weapons/Guarder/ShiningKuirongKingGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "應龍霸王臂甲":   { image: "images/weapons/Guarder/YinglongEmperorGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "夔龍霸王臂甲":   { image: "images/weapons/Guarder/KuirongEmperorGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "閃耀的應龍霸王臂甲": { image: "images/weapons/Guarder/ShiningYinglongEmperorGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "閃耀的夔龍霸王臂甲": { image: "images/weapons/Guarder/ShiningKuirongEmperorGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "盧德萊心臟":     { image: "images/weapons/Guarder/RudraGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "守衛者軍團長臂甲": { image: "images/weapons/Guarder/GuardianBGGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "執政官軍團長臂甲": { image: "images/weapons/Guarder/ArchonBGGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "被侵蝕的支配者鎖鏈": { image: "images/weapons/Guarder/ErodedDominatorGuarder.png", grade: "Epic", type: "weapon", subtype: "Guarder" },

  // ========== 製作材料 ==========
  "達人最上級提煉石": { image: "images/materials/MasterSupremeRefinerStone_Bind.png", grade: "Unique", type: "material" },
  "達人最上級提煉石":       { image: "images/materials/MasterSupremeRefinerStone.png", grade: "Unique", type: "material" },
  "提煉的強固龍族角":       { image: "images/materials/RefinedSolidBalaurHorn.png", grade: "Unique", type: "material" },
  "提煉的強結龍族角":       { image: "images/materials/RefinedFirmBalaurHorn.png", grade: "Unique", type: "material" },
  "鞣製的強固龍族皮革":     { image: "images/materials/TannedSolidBalaurLeather.png", grade: "Unique", type: "material" },
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
  "達人閃耀的奧里哈康巨劍": { image: null, grade: "Epic", type: "material" },
  "達人閃耀的奧里哈康長劍": { image: null, grade: "Epic", type: "material" },
  "達人閃耀的奧里哈康短劍": { image: null, grade: "Epic", type: "material" },
  "達人閃耀的奧里哈康弓":   { image: null, grade: "Epic", type: "material" },
  "達人閃耀的奧里哈康魔法書": { image: null, grade: "Epic", type: "material" },
  "達人閃耀的奧里哈康法珠": { image: null, grade: "Epic", type: "material" },
  "達人閃耀的奧里哈康釘錘": { image: null, grade: "Epic", type: "material" },
  "達人閃耀的奧里哈康法杖": { image: null, grade: "Epic", type: "material" },
  "達人閃耀的奧里哈康臂甲": { image: null, grade: "Epic", type: "material" },
  "燦爛的奧里哈康礦石":     { image: null, grade: "Unique", type: "material" },
  "燦爛的奧德":       { image: null, grade: "Unique", type: "material" },
};

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
  "Guarder":    "臂甲"
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
