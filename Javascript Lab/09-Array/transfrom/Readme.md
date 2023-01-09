Lab1
ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)
const array = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
const array = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
const array = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
const array = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
const array = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const array = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
const array = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
const array = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const array = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]

ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)
const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: ["apple", "banana", "watermelon"]

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]

const array = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]

Lab2
จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor

Lab3
จงเรียงข้อมูลใน arr จากมากไปหาน้อย
const arr = [11, 17, 23, 13, 7, 19];

Lab4
จงเรียงข้อมูลใน arr โดยเรียงตามค่า element ยกกำลัง 2 จากน้อยไปหามาก
const arr = [-3, 2, 0, -7, 4, 6];

Lab5
จงเรียงข้อมูล object ใน arr โดยเรียงตามค่า age จากน้อยไปหามาก
const arr = [
  { name: 'John', age: 25 },
  { name: 'Leon', age: 26 },
  { name: 'Mick', age: 29 },
  { name: 'Pete', age: 30 },
  { name: 'Mary', age: 28 }
];

Lab6
จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม
ตัวอย่างผลลัพธ์
let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
