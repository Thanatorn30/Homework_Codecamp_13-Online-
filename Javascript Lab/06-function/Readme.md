ชื่อ ธนาธรณ์ ธรรมสาคร 

Lab1
ให้สร้างฟังก์ชันชื่อ sayHelloWorld
เมื่อเรียกใช้ฟังก์ชันให้ alert คำว่า “Hello World”

Lab2
ให้ใช้คำสั่ง prompt เพื่อรับชื่อผู้ใช้งาน
ให้สร้างฟังก์ชันชื่อ sayHelloUser
เมื่อเรียกใช้ฟังก์ชันให้ alert คำว่า “Hello ” ตามด้วยชื่อผู้ใช้งาน

Lab3
บรรทัด *, **, *** และ **** ให้ผลลัพธ์เป็นอะไร เพราะอะไร
let message = 'Welcome to Thailand';

function logMessage(message) {
  message = 'Hello everybody';
  console.log(message); // *
}

logMessage(message);
console.log(message); // **
let name = 'John';

function sayHi(input) {
  console.log(name); // ***  
  name = input;  
}

sayHi();
console.log(name); // ****

Lab4
บรรทัด * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
function sayHi(name) {
  let name = 'Guest';
  console.log(name); // *
}

sayHi('Jim');

Lab5
บรรทัด *, **, *** และ **** ให้ผลลัพธ์เป็นอะไร เพราะอะไร
const sender = 'Matt';

function sendTo(from, to) {
  console.log(`From ${from} to ${to}`); 
}

sendTo(sender, 'Sarah'); // *
sendTo(null); // **
const sender = 'Matt';

function sendTo(to, from = 'CC') {
  console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // ***
sendTo('Ben', 'Jay'); // ****

Lab6
ให้สร้างฟังก์ชันมีพารามิเตอร์ 2 ตัว และให้ผลลัพธ์เป็นผลคูณของพารามิเตอร์ทั้งสอง

Lab7
ให้สร้างฟังก์ชันชื่อ min มีพารามิเตอร์ 2 ตัว และให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

Lab8
ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password 
ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

Lab9
ให้สร้างฟังก์ชันเช็คตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่
ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข และแสดงตัวเลขจำนวนเฉพาะทั้งหมดตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

Lab10
บรรทัด * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
function squareNum(num) {
  const result = num * num;
}

console.log(squareNum(2)); // *

Lab11
บรรทัดที่มี *, **, *** และ ****
ให้ผลลัพธ์เป็นอะไร เพราะอะไร
function sayHi(age) {
  if (age < 12) alert('Hi kid');
}
console.log(sayHi); // *
console.log(sayHi(10)); // **
function sayHi(name) {
  if (name) {
    alert('Hi ' + name);
    return;
  } else {
    return 'Who are you';
  }
}
console.log(sayHi('John')); // ***
console.log(sayHi()); // ****

Lab12
บรรทัด * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
function getLongText() {
  return
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}

console.log(getLongText()); // *

Lab13
ให้สร้างฟังก์ชันที่ทำงานได้เหมือนฟังก์ชันด้านล่าง โดยให้เขียน 3 แบบ
ใช้ if แต่ห้ามใช้ else
ใช้ ? แทน if
ใช้ || แทน if
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }

Lab14
ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
พารามิเตอร์มีได้มากสุด 4 ตัว
หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้
max(); // undefined
max(2); // 2
max(3, 1); // 3
max(7, 3, 9, 2); // 9

<!-- Function Expression -->
Lab1
ให้สร้างฟังก์ชันคูณตัวเลขสองตัว โดยเขียนในรูปแบบ Function Expression
ให้ลองเรียกใช้ฟังก์ชันโดยหาผลคูณของ 17 กับ 7


Lab2
บรรทัด * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร
const showModal = alert;
showModal('Execute modal'); // *
const showModal = alert();
showModal('Execute modal'); // **

Lab3
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // *
console.log(answer(1337)); // **
console.log(magic(1337)(42)); // ***

<!-- Arrow Function -->
Lab1
ให้สร้างฟังก์ชันคูณตัวเลขสองตัว โดยเขียนในรูปแบบ Arrow Function 
ให้ลองเรียกใช้ฟังก์ชันโดยหาผลคูณของ 23 กับ 9

Lab2
ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function

Lan3
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
const square = n => {
  n ** 2;
};

console.log(square(7)); // *
const calcCircleArea = r => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // **

Lab4
โค้ดทั้งสองชุดด้านล่างทำงานได้เหมือนกันหรือไม่
const logName = (name) => console.log(name);
const logName = name => console.log(name);

Lab5
ให้เขียนฟังก์ชันด้านล่างให้อยู่ในรูปแบบ Arrow Function
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask('Do you agree?', 
  function () { alert('You agreed.'); },
  function () { alert('You canceled the execution.'); }
);

Lab6
ให้เขียนฟังก์ชัน Convert day to second

Lab7
ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

Lab8
ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

Lab9
ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year
leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

Lab10
ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)
ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

Lab11
ให้เขียนฟังก์ชันแปลงอุณหภูมิจาก farenheit เป็น celsius

Lab12
ให้เขียนฟังก์ชันคำนวณค่า factorial

<!-- Callback -->
Lab1
ให้สร้างฟังก์ชัน checkPermission โดยมีพารามิเตอร์ 3 ตัว
ตัวแรกเป็น role
ตัวที่สองเป็นฟังก์ชันและทำงานเมื่อ role  มีค่าเท่ากับ “ADMIN”
ตัวที่สามเป็นฟังก์ชันและทำงานเมื่อ role  ไม่ใช่  “ADMIN”
ให้ลองเรียกใช้ฟังก์ชันโดย
ถ้า role เป็น “ADMIN” ให้ alert “ACCESS GRANTED”
ถ้า role ไม่ใช่ “ADMIN” ให้ alert “ACCESS DENIED”

<!-- Variable scope -->
Lab1
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // *

Lab2
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
function makeWorker() {
  let name = 'Pete';
  return function () {
    alert(name);
  };
}
let name = 'John';
let work = makeWorker();
work(); // *

Lab3
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // *

Lab4
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
let x = 1;
function func() {
  console.log(x); // *
  let x = 2;
}
func();








