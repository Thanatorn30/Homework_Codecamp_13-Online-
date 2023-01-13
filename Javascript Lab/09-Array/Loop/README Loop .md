------------Lab1-------------
จงหาผลรวมของ element ใน array โดยใช้ forEach
const array = [29, 17, 13, 47, 23, 31];


----------Lab2--------------
ให้ใช้ forEach และ console.log ให้ได้ผลลัพธ์แบบใน comment ด้านล่าง
const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// 1. Mike
// 2. Sid
// 3. Jack
// 4. Bill

----------Lab3--------------
-ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
-ตัวอย่างผลลัพธ์
const arr = [2, 3, 5, 7, 11];
squareArr(arr); // [4, 9, 25, 49, 121]

----------Lab4--------------
จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
];

เป็น

const summary = [
  { netPrice: 900 }, 
  { netPrice: 475 },
  { netPrice: 100 }
];

----------Lab5--------------
-ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
-รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
-ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

