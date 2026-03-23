/**
 * AION2 道具名稱與圖片路徑映射
 * 圖片路徑相對於專案根目錄
 */
const ITEMS = {
  // ========== 武器 ==========
  // 巨劍 (Greatsword)
  "應龍王巨劍":     { image: "images/weapons/Greatsword/應龍王巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "夔龍王巨劍":     { image: "images/weapons/Greatsword/夔龍王巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "閃耀的應龍王巨劍": { image: "images/weapons/Greatsword/閃耀的應龍王巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "閃耀的夔龍王巨劍": { image: "images/weapons/Greatsword/閃耀的夔龍王巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "應龍霸王巨劍":   { image: "images/weapons/Greatsword/應龍霸王巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "夔龍霸王巨劍":   { image: "images/weapons/Greatsword/夔龍霸王巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "閃耀的應龍霸王巨劍": { image: "images/weapons/Greatsword/閃耀的應龍霸王巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "閃耀的夔龍霸王巨劍": { image: "images/weapons/Greatsword/閃耀的夔龍霸王巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "盧德萊絕滅刀":   { image: "images/weapons/Greatsword/盧德萊絕滅刀.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "守衛者軍團長巨劍": { image: "images/weapons/Greatsword/守衛者軍團長巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "執政官軍團長巨劍": { image: "images/weapons/Greatsword/執政官軍團長巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },
  "被侵蝕的支配者捕食巨劍": { image: "images/weapons/Greatsword/被侵蝕的支配者捕食巨劍.png", grade: "Epic", type: "weapon", subtype: "Greatsword" },

  // 長劍 (Sword)
  "應龍王長劍":     { image: "images/weapons/Sword/應龍王長劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "夔龍王長劍":     { image: "images/weapons/Sword/夔龍王長劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "閃耀的應龍王長劍": { image: "images/weapons/Sword/閃耀的應龍王長劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "閃耀的夔龍王長劍": { image: "images/weapons/Sword/閃耀的夔龍王長劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "應龍霸王長劍":   { image: "images/weapons/Sword/應龍霸王長劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "夔龍霸王長劍":   { image: "images/weapons/Sword/夔龍霸王長劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "閃耀的應龍霸王長劍": { image: "images/weapons/Sword/閃耀的應龍霸王長劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "閃耀的夔龍霸王長劍": { image: "images/weapons/Sword/閃耀的夔龍霸王長劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "盧德萊鱗片劍":   { image: "images/weapons/Sword/盧德萊鱗片劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "守衛者軍團長長劍": { image: "images/weapons/Sword/守衛者軍團長長劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "執政官軍團長長劍": { image: "images/weapons/Sword/執政官軍團長長劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },
  "被侵蝕的支配者灼熱劍": { image: "images/weapons/Sword/被侵蝕的支配者灼熱劍.png", grade: "Epic", type: "weapon", subtype: "Sword" },

  // 短劍 (Dagger)
  "應龍王短劍":     { image: "images/weapons/Dagger/應龍王短劍.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "夔龍王短劍":     { image: "images/weapons/Dagger/夔龍王短劍.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "閃耀的應龍王短劍": { image: "images/weapons/Dagger/閃耀的應龍王短劍.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "閃耀的夔龍王短劍": { image: "images/weapons/Dagger/閃耀的夔龍王短劍.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "應龍霸王短劍":   { image: "images/weapons/Dagger/應龍霸王短劍.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "夔龍霸王短劍":   { image: "images/weapons/Dagger/夔龍霸王短劍.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "閃耀的應龍霸王短劍": { image: "images/weapons/Dagger/閃耀的應龍霸王短劍.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "閃耀的夔龍霸王短劍": { image: "images/weapons/Dagger/閃耀的夔龍霸王短劍.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "盧德萊腳爪":     { image: "images/weapons/Dagger/盧德萊腳爪.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "守衛者軍團長短劍": { image: "images/weapons/Dagger/守衛者軍團長短劍.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "執政官軍團長短劍": { image: "images/weapons/Dagger/執政官軍團長短劍.png", grade: "Epic", type: "weapon", subtype: "Dagger" },
  "被侵蝕的支配者惡意": { image: "images/weapons/Dagger/被侵蝕的支配者惡意.png", grade: "Epic", type: "weapon", subtype: "Dagger" },

  // 弓 (Bow)
  "應龍王弓":       { image: "images/weapons/Bow/應龍王弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "夔龍王弓":       { image: "images/weapons/Bow/夔龍王弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "閃耀的應龍王弓":   { image: "images/weapons/Bow/閃耀的應龍王弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "閃耀的夔龍王弓":   { image: "images/weapons/Bow/閃耀的夔龍王弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "應龍霸王弓":     { image: "images/weapons/Bow/應龍霸王弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "夔龍霸王弓":     { image: "images/weapons/Bow/夔龍霸王弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "閃耀的應龍霸王弓": { image: "images/weapons/Bow/閃耀的應龍霸王弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "閃耀的夔龍霸王弓": { image: "images/weapons/Bow/閃耀的夔龍霸王弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "盧德萊絕命弓":   { image: "images/weapons/Bow/盧德萊絕命弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "守衛者軍團長弓":   { image: "images/weapons/Bow/守衛者軍團長弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "執政官軍團長弓":   { image: "images/weapons/Bow/執政官軍團長弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },
  "被侵蝕的支配者灼熱弓": { image: "images/weapons/Bow/被侵蝕的支配者灼熱弓.png", grade: "Epic", type: "weapon", subtype: "Bow" },

  // 魔法書 (Magicbook)
  "應龍王魔法書":    { image: "images/weapons/Magicbook/應龍王魔法書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "夔龍王魔法書":    { image: "images/weapons/Magicbook/夔龍王魔法書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "閃耀的應龍王魔法書": { image: "images/weapons/Magicbook/閃耀的應龍王魔法書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "閃耀的夔龍王魔法書": { image: "images/weapons/Magicbook/閃耀的夔龍王魔法書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "應龍霸王魔法書":  { image: "images/weapons/Magicbook/應龍霸王魔法書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "夔龍霸王魔法書":  { image: "images/weapons/Magicbook/夔龍霸王魔法書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "閃耀的應龍霸王魔法書": { image: "images/weapons/Magicbook/閃耀的應龍霸王魔法書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "閃耀的夔龍霸王魔法書": { image: "images/weapons/Magicbook/閃耀的夔龍霸王魔法書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "盧德萊禁書":     { image: "images/weapons/Magicbook/盧德萊禁書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "守衛者軍團長魔法書": { image: "images/weapons/Magicbook/守衛者軍團長魔法書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "執政官軍團長魔法書": { image: "images/weapons/Magicbook/執政官軍團長魔法書.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },
  "被侵蝕的支配者炎火": { image: "images/weapons/Magicbook/被侵蝕的支配者炎火.png", grade: "Epic", type: "weapon", subtype: "Magicbook" },

  // 法珠 (Orb)
  "應龍王法珠":     { image: "images/weapons/Orb/應龍王法珠.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "夔龍王法珠":     { image: "images/weapons/Orb/夔龍王法珠.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "閃耀的應龍王法珠": { image: "images/weapons/Orb/閃耀的應龍王法珠.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "閃耀的夔龍王法珠": { image: "images/weapons/Orb/閃耀的夔龍王法珠.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "應龍霸王法珠":   { image: "images/weapons/Orb/應龍霸王法珠.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "夔龍霸王法珠":   { image: "images/weapons/Orb/夔龍霸王法珠.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "閃耀的應龍霸王法珠": { image: "images/weapons/Orb/閃耀的應龍霸王法珠.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "閃耀的夔龍霸王法珠": { image: "images/weapons/Orb/閃耀的夔龍霸王法珠.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "盧德萊深淵玉":   { image: "images/weapons/Orb/盧德萊深淵玉.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "守衛者軍團長法珠": { image: "images/weapons/Orb/守衛者軍團長法珠.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "執政官軍團長法珠": { image: "images/weapons/Orb/執政官軍團長法珠.png", grade: "Epic", type: "weapon", subtype: "Orb" },
  "被侵蝕的支配者紅焰玉": { image: "images/weapons/Orb/被侵蝕的支配者紅焰玉.png", grade: "Epic", type: "weapon", subtype: "Orb" },

  // 釘錘 (Mace)
  "應龍王釘錘":     { image: "images/weapons/Mace/應龍王釘錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "夔龍王釘錘":     { image: "images/weapons/Mace/夔龍王釘錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "閃耀的應龍王釘錘": { image: "images/weapons/Mace/閃耀的應龍王釘錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "閃耀的夔龍王釘錘": { image: "images/weapons/Mace/閃耀的夔龍王釘錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "應龍霸王釘錘":   { image: "images/weapons/Mace/應龍霸王釘錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "夔龍霸王釘錘":   { image: "images/weapons/Mace/夔龍霸王釘錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "閃耀的應龍霸王釘錘": { image: "images/weapons/Mace/閃耀的應龍霸王釘錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "閃耀的夔龍霸王釘錘": { image: "images/weapons/Mace/閃耀的夔龍霸王釘錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "盧德萊滅錘":     { image: "images/weapons/Mace/盧德萊滅錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "守衛者軍團長釘錘": { image: "images/weapons/Mace/守衛者軍團長釘錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "執政官軍團長釘錘": { image: "images/weapons/Mace/執政官軍團長釘錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },
  "被侵蝕的支配者赤熱錘": { image: "images/weapons/Mace/被侵蝕的支配者赤熱錘.png", grade: "Epic", type: "weapon", subtype: "Mace" },

  // 法杖 (Staff)
  "應龍王法杖":     { image: "images/weapons/Staff/應龍王法杖.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "夔龍王法杖":     { image: "images/weapons/Staff/夔龍王法杖.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "閃耀的應龍王法杖": { image: "images/weapons/Staff/閃耀的應龍王法杖.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "閃耀的夔龍王法杖": { image: "images/weapons/Staff/閃耀的夔龍王法杖.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "應龍霸王法杖":   { image: "images/weapons/Staff/應龍霸王法杖.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "夔龍霸王法杖":   { image: "images/weapons/Staff/夔龍霸王法杖.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "閃耀的應龍霸王法杖": { image: "images/weapons/Staff/閃耀的應龍霸王法杖.png", grade: "Epic", type: "weapon", subtype: "Staff" },
  "閃耀的夔龍霸王法杖": { image: "images/weapons/Staff/閃耀的夔龍霸王法杖.png", grade: "Epic", type: "weapon", subtype: "Staff" },

  // 臂甲 (Guarder)
  "應龍王臂甲":     { image: "images/weapons/Guarder/應龍王臂甲.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "夔龍王臂甲":     { image: "images/weapons/Guarder/夔龍王臂甲.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "閃耀的應龍王臂甲": { image: "images/weapons/Guarder/閃耀的應龍王臂甲.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "閃耀的夔龍王臂甲": { image: "images/weapons/Guarder/閃耀的夔龍王臂甲.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "應龍霸王臂甲":   { image: "images/weapons/Guarder/應龍霸王臂甲.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "夔龍霸王臂甲":   { image: "images/weapons/Guarder/夔龍霸王臂甲.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "閃耀的應龍霸王臂甲": { image: "images/weapons/Guarder/閃耀的應龍霸王臂甲.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "閃耀的夔龍霸王臂甲": { image: "images/weapons/Guarder/閃耀的夔龍霸王臂甲.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "盧德萊心臟":     { image: "images/weapons/Guarder/盧德萊心臟.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "守衛者軍團長臂甲": { image: "images/weapons/Guarder/守衛者軍團長臂甲.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "執政官軍團長臂甲": { image: "images/weapons/Guarder/執政官軍團長臂甲.png", grade: "Epic", type: "weapon", subtype: "Guarder" },
  "被侵蝕的支配者鎖鏈": { image: "images/weapons/Guarder/被侵蝕的支配者鎖鏈.png", grade: "Epic", type: "weapon", subtype: "Guarder" },

  // ========== 製作材料 ==========
  "達人最上級提煉石(刻印)": { image: "images/materials/達人最上級提煉石(刻印).png", grade: "Unique", type: "material" },
  "達人最上級提煉石":       { image: "images/materials/達人最上級提煉石.png", grade: "Unique", type: "material" },
  "提煉的強固龍族角":       { image: "images/materials/提煉的強固龍族角.png", grade: "Unique", type: "material" },
  "提煉的強結龍族角":       { image: "images/materials/提煉的強結龍族角.png", grade: "Unique", type: "material" },
  "鞣製的強固龍族皮革":     { image: "images/materials/鞣製的強固龍族皮革.png", grade: "Unique", type: "material" },
  "鞣製的強結龍族皮革":     { image: "images/materials/鞣製的強結龍族皮革.png", grade: "Unique", type: "material" },
  "強化的強固龍族鱗片":     { image: "images/materials/強化的強固龍族鱗片.png", grade: "Unique", type: "material" },
  "強化的強結龍族鱗片":     { image: "images/materials/強化的強結龍族鱗片.png", grade: "Unique", type: "material" },
  "憤怒思念(刻印)":         { image: "images/materials/憤怒思念(刻印).png", grade: "Unique", type: "material" },
  "憤怒思念":               { image: "images/materials/憤怒思念.png", grade: "Unique", type: "material" },
  "憤怒意志(刻印)":         { image: "images/materials/憤怒意志(刻印).png", grade: "Unique", type: "material" },
  "憤怒意志":               { image: "images/materials/憤怒意志.png", grade: "Unique", type: "material" },
  "憤怒自我(刻印)":         { image: "images/materials/憤怒自我(刻印).png", grade: "Unique", type: "material" },
  "憤怒自我":               { image: "images/materials/憤怒自我.png", grade: "Unique", type: "material" },
  "憤怒昇華(刻印)":         { image: "images/materials/憤怒昇華(刻印).png", grade: "Unique", type: "material" },
  "憤怒昇華":               { image: "images/materials/憤怒昇華.png", grade: "Unique", type: "material" },
  "憤怒願望(刻印)":         { image: "images/materials/憤怒願望(刻印).png", grade: "Unique", type: "material" },
  "憤怒願望":               { image: "images/materials/憤怒願望.png", grade: "Unique", type: "material" },
  "發狂的憤怒巫蠱(刻印)":   { image: "images/materials/發狂的憤怒巫蠱(刻印).png", grade: "Epic", type: "material" },
  "發狂的憤怒巫蠱":         { image: "images/materials/發狂的憤怒巫蠱.png", grade: "Epic", type: "material" },
  "發狂的憤怒心血(刻印)":   { image: "images/materials/發狂的憤怒心血(刻印).png", grade: "Epic", type: "material" },
  "發狂的憤怒心血":         { image: "images/materials/發狂的憤怒心血.png", grade: "Epic", type: "material" },
  "強固的龍族皮革(刻印)":   { image: "images/materials/強固的龍族皮革(刻印).png", grade: "Unique", type: "material" },
  "強固的龍族皮革":         { image: "images/materials/強固的龍族皮革.png", grade: "Unique", type: "material" },
  "強固的龍族角(刻印)":     { image: "images/materials/強固的龍族角(刻印).png", grade: "Unique", type: "material" },
  "強固的龍族角":           { image: "images/materials/強固的龍族角.png", grade: "Unique", type: "material" },
  "強固的龍族鱗片(刻印)":   { image: "images/materials/強固的龍族鱗片(刻印).png", grade: "Unique", type: "material" },
  "強固的龍族鱗片":         { image: "images/materials/強固的龍族鱗片.png", grade: "Unique", type: "material" },
  "強結的龍族皮革(刻印)":   { image: "images/materials/強結的龍族皮革(刻印).png", grade: "Unique", type: "material" },
  "強結的龍族皮革":         { image: "images/materials/強結的龍族皮革.png", grade: "Unique", type: "material" },
  "強結的龍族角(刻印)":     { image: "images/materials/強結的龍族角(刻印).png", grade: "Unique", type: "material" },
  "強結的龍族角":           { image: "images/materials/強結的龍族角.png", grade: "Unique", type: "material" },
  "強結的龍族鱗片(刻印)":   { image: "images/materials/強結的龍族鱗片(刻印).png", grade: "Unique", type: "material" },
  "強結的龍族鱗片":         { image: "images/materials/強結的龍族鱗片.png", grade: "Unique", type: "material" },

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
  "燦爛的奧德(刻印)":       { image: null, grade: "Unique", type: "material" },
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
  "Epic":   "#ffd700",
  "Unique": "#b366ff",
  "Rare":   "#4d9fff",
  "Normal": "#cccccc"
};
