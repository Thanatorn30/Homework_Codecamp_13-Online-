Lab1
จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น String แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f 
ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร
let a = undefined;
let b = 2;
let c = a++;

Lab2
จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น Number แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f 
ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร
let a = undefined;
let b = null;
let c = b + '4 2';


Lab3
จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น Boolean แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f 
ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร
let a = undefined;
let b = ' ';
let c = !b;



Lab4
ให้ User กรอกข้อมูลที่เป็นตัวเลข 2 ครั้ง โดยใช้คำสั่ง prompt 
ให้ alert ผลบวกของตัวเลขทั้งสอง

Lab5
ให้สร้างตัวแปร a มีค่าเท่ากับ 0.1 และ b มีค่าเท่ากับ 0.2 
สร้างตัวแปร c ให้มีค่าเท่ากับผลรวมของ a และ b
ให้ alert ตัวแปร c โดยผลลัพธ์ที่ได้จากการ alert ต้องเป็น 0.3

<!-- Type Coercion -->
Lab1
จงหาผลลัพธ์ของ typeof ดังต่อไปนี้
typeof 'x';
typeof x;
typeof ``;
typeof Infinity;
typeof(100 / 0);
typeof(1 + '3');
typeof(1 * 'a');
typeof null;

Lab2
จงหาผลลัพธ์ทั้งหมดที่เกิดจากคำสั่ง console.log
console.log('' + 1 + 0);
console.log('' - 1 + 0)); 
console.log(true + false);
console.log(6 / '3');
console.log('2' * '3');
console.log('   -9   ' - 5);
console.log('   -9   ' + 5);
console.log('4px' - 2);
console.log(2 + 4 + 'px');
console.log(null + 1);
console.log(undefined + 1);

Lab3
a มีค่าเท่าไหร่และเพราะอะไร
let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);
