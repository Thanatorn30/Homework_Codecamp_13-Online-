Lab1
ผลจากการรันคำสั่งในบรรทัด * คืออะไร
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // *
console.log(beasts.indexOf('bison', 2)); // **
console.log(beasts.indexOf('giraffe')); // ***

Lab2
จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets
const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

Lab3
ผลจากการรันคำสั่งในบรรทัด * คืออะไร
console.log([1, 2, 3].includes(2)); // *
console.log([1, 2, 3].includes(4)); // **
console.log([1, 2, 3].includes(3, 3)); // ***
console.log([1, 2, 3].includes(3, -1)); // ****
console.log([1, 2, NaN].includes(NaN)); // *****
console.log(['1', '2', '3'].includes(3)); // ******

Lab4
จงหา element ตัวแรก ใน nums ที่มีค่าน้อยกว่า 0
const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5

Lab5
จงหา element ตัวแรก ใน inventory ที่มี name เท่ากับ cherries
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];
// expected result: { name: 'cherries', quantity: 5 }

Lab6
จงหา index ใน tasks ที่มี id เท่ากับ 2
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];
// expexted result: 1

Lab7
จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
execute updateTask(2, 'Travelling')
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

Lab8
จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id 
execute deleteTask(1)
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

Lab9
ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter
const array = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const array = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
const array = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
const array = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
const array = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว
const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// ค่าที่ขึ้นต้นด้วยตัว E
const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter
const array = [
  { name: 'Ben', age: 14 },
  { name: 'Phil', age: 18 },
  { name: 'John', age: 32 },
  { name: 'Ann', age: 16 },
  { name: 'Paul', age: 24 }
];
// อายุไม่น้อยกว่า 18 

ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter
const array = [
  { id: 1, name: 'Pepsi' },
  { id: 2, name: 'Mirinda' },
  { id: 3, name: 'Coke' },
  { id: 4, name: 'Fanta' },
  { id: 5, name: 'Sprite' }
];
// id ไม่เท่ากับ 4

ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter
const array = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' }
];
// เกิดเดือน 6

Lab10
จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

