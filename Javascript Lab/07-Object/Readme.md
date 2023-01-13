ชื่อ ธนาธรณ์ ธรรมสาคร 

lab1
จงสร้างตัวแปรชื่อ person ซึ่งเก็บข้อมูลประเภท Object และมี property 5 ชุด ซึ่งเป็นข้อมูลของผู้เรียน ได้แก่ ชื่อ, อายุ, เพศ, ที่อยู่, เบอร์โทร

Property
Lab1
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // *
user = {};
console.log(user); // **

Lab2
ให้สร้าง object ชื่อ user
เพิ่ม property ชื่อ name ให้มีค่าเท่ากับ John
เพิ่ม property ชื่อ surname ให้มีค่าเท่ากับ Doe
Update property name ให้มีค่าเป็น Matt
ลบ property name

Lab3
ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password
ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

Lab4
ให้เขียนโค้ดเพื่อ log province  
ของ product1
หากมี product2 เป็น object 
ว่าง ให้ log province ของ 
product2 โดยใช้คำสั่งเดียวกับ 
product1 
(หาก Error ให้หาวิธีแก้)
const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};

LOOP through Object
Lab1
ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่ 
ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

Lab2
ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

Lab3
ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
คูณเฉพาะ value ที่เป็น number เท่านั้น

Lab4
ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

Lab5
ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

Lab6
ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

Lab7
ให้รับข้อมูลเป็นชื่อพนักงาน
หากมีพนักงานที่ชื่อตรงกับคีย์ในอ็อบเจ็คด้านล่างให้แสดงข้อความว่า Name: john, salary: 1000, address: Ratchathewi, Bangkok หากไม่มีชื่อแสดงข้อความว่า Not Found
const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};


Copied 
by Reference


Lab1
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // *
console.log(product2); // **
console.log(product1 === product2); // ***

Lab2
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); // *

Clone Object
Lab1
ให้สร้าง Object ที่มี key และ value เหมือน notebook โดยวิธี for ... in loop และ Object.assign
const notebook = {
  brand: 'ASUS',
  model: 'Vivobook D413IA-EB303TS',
  processor: 'AMD Ryzen 7 4700U 3.6GHz',
  graphics: 'Integrated Graphics : AMD Radeon Graphics',
  ram: '8GB DDR4 Onboard',
  storage: '512GB PCIe NVMe M.2 SSD'
};

Lab2
ให้สร้าง Object ที่มี property เหมือน state1 แต่ loading ให้มีค่าเป็น false point มีค่า 75 และให้เพิ่ม property success เข้าไปโดยให้มีค่าเป็น true 
const state1 = { username: 'john', point: 100, loading: true };


Lab3
ให้ merge Object ทั้ง 4 เข้าด้วยกัน แล้วเก็บไว้ในตัวแปรชื่อ permission
หาก key ซ้ำกันให้ใช้ค่าของตัวแปรที่มีตัวเลขสูงกว่า
const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

this 
keyword


Lab1
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
  }
};

(user.sayHi)(); // *

Lab2

บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // *

Lab3
ให้สร้าง Object calculator ซึ่งมี 3 method 
read() ให้รับค่า input 2 ค่า
sum() ให้ return ค่าผลบวกของเลขทั้งสอง
mul() ให้ return ค่าผลคูณของเลขทั้งสอง
let calculator = {
  // ... your code ...
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

Constructor function & new keyword
Lab1
ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
read() ให้รับค่า input 2 ค่า
sum() ให้ return ค่าผลบวกของเลขทั้งสอง
mul() ให้ return ค่าผลคูณของเลขทั้งสอง

Lab2
ให้สร้าง Constructor Function: Accumulator(startingValue) มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง) และมี method 
read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
show() ให้ alert ค่า currentValue


