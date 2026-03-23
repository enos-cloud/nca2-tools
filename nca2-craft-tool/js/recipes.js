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
      { name: "達人閃耀的奧里哈康弓", qty: 5 },
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
  "應龍王弓": {
    grade: "Epic",
    category: "Bow",
    materials: [
      { name: "達人閃耀的奧里哈康弓", qty: 5 },
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
      { name: "達人閃耀的奧里哈康法杖", qty: 5 },
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
  "應龍王法杖": {
    grade: "Epic",
    category: "Staff",
    materials: [
      { name: "達人閃耀的奧里哈康法杖", qty: 5 },
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
