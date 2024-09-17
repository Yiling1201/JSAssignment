const birthYear = 2000;
const currentYear = 2024;
let age = currentYear - birthYear; // 計算年齡

let isChild = age >= 0 && age <= 10; // 年齡在 0 到 10 歲之間為小孩
let isTeenager = age >= 11 && age <= 17; // 年齡在 11 到 17 歲之間為青少年
let isAdult = age >= 18; // 年齡 18 歲或以上為成年人

console.log(isChild); // 輸出是否為小孩
console.log( isTeenager); // 輸出是否為青少年
console.log(isAdult); // 輸出是否為成年人

