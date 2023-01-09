 //------------------------ Searching---------------------------------
        // --------------------Lab1---------------
        // *ได้ 1   **ได้4   ***ได้ undefined-1
        // const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
        // console.log(beasts.indexOf('camel')); // *
        // console.log(beasts.indexOf('bison', 2)); // **
        // console.log(beasts.indexOf('giraffe')); // ***

        // --------------------Lab2---------------
        // จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

        // const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
        // let newarr = []
        // let arr = alphabets.forEach((item,index)=>{
        //     if(item == 'a'){
        //         console.log(index);
        //     }
        // })
        
        // ------------------Lab3-----------------
        // console.log([1, 2, 3].includes(2)); // *
        // console.log([1, 2, 3].includes(4)); // **
        // console.log([1, 2, 3].includes(3, 3)); // ***
        // console.log([1, 2, 3].includes(3, -1)); // ****
        // console.log([1, 2, NaN].includes(NaN)); // *****
        // console.log(['1', '2', '3'].includes(3)); // ******
       
        // * ตอบ true , * ตอบ false , *** ตอบ false , **** ตอบ true ,*****ตอบ true, ******ตอบ 
        
        // ------------------Lab4-----------------
        // const nums = [7, 9, -5, -1, 0, 3];
        // let numfind = nums.find((item,index)=>{if(item < 0){
        //    return item; 
        // }})
        // console.log(numfind);

        // ------------------Lab5-----------------
        //  const inventory = [
        //         { name: 'apples', quantity: 2 },
        //         { name: 'bananas', quantity: 0 },
        //         { name: 'cherries', quantity: 5 }
        //     ];
        // let find = inventory.find(function(item){
        //     if(item.name == 'cherries'){
        //         return item
        //     }
        // })
        // console.log(find);

        // ------------------Lab6-----------------
        // const tasks = [
        //     { id: 1, name: 'Fishing' },
        //     { id: 2, name: 'Shopping' },
        //     { id: 3, name: 'Swimming' }
        // ];
        // let result = tasks.findIndex((item,index)=>{if(item.id == 2){return index}})
        // console.log(result);

        // ------------------Lab9-----------------
        // const array1 = [9, 17, 23, 5];// ค่าที่มากกว่า 10
        // array1.filter(function(item,index){
        //     if(item > 10){
        //         console.log(item);
        //     }
        // })

        // const array2 = [1, 2, 3, 4];// ค่าที่เป็นเลขคี่
        // array2.filter((item,index)=>{if(item%2 !== 0){
        //     console.log(item);
        // }})

        // const array3 = [1, '1', 2, {}];// ค่าที่ประเภทข้อมูลเป็น Number
        // array3.filter((item,index)=>{
        //     if(isNaN(item)!==true){
        //         console.log(item);
        //     }
        // })

        // const array4 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
        // array4.filter((item)=>{if(item.length>6){console.log(item);}})

        // const array5 = [1, -3, 2, 8, -4, 5];// ค่าที่เป็นเลขบวก
        // array5.filter((item)=>{if(item>0){console.log(item);}})

        // const array6 = [1, 3, 4, 5, 6, 7, 8];// ค่าที่หาร 3 ลงตัว
        // array6.filter((item)=>{if(item%3==0){console.log(item);}})

        // const array7 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];// ค่าที่ขึ้นต้นด้วยตัว E
        // array7.filter((item)=>{if(item[0]==='E'){console.log(item);}})
        
        // const array8 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
        // array8.filter((item)=>{
        //     if(item===item.toUpperCase()){
        //         console.log(item);
        //     }
        // })
    
        // const array = [
        //     { name: 'Ben', age: 14 },
        //     { name: 'Phil', age: 18 },
        //     { name: 'John', age: 32 },
        //     { name: 'Ann', age: 16 },
        //     { name: 'Paul', age: 24 }
        // ];
        // // อายุไม่น้อยกว่า 18
        // let result = array.filter((item)=>{
        //     if(item.age >=18){
        //         console.log(item);
        //     }
        // })

        // const array = [
        //     { id: 1, name: 'Pepsi' },
        //     { id: 2, name: 'Mirinda' },
        //     { id: 3, name: 'Coke' },
        //     { id: 4, name: 'Fanta' },
        //     { id: 5, name: 'Sprite' }
        // ];
        // // id ไม่เท่ากับ 4
        // let result = array.filter((item)=>{
        //     if(item.id !== 4){
        //         console.log(item);
        //     }
        // })

        // const array = [
        //     { name: 'John', birth: '2001-07-31' },
        //     { name: 'Jack', birth: '1990-06-24' },
        //     { name: 'Jim', birth: '1984-12-13' },
        //     { name: 'Jeff', birth: '1996-02-05' },
        //     { name: 'Joe', birth: '2002-06-13' }
        // ];
        // // เกิดเดือน 6
        // array.filter((item)=>{
        //     if(item.birth[6]==6){
        //         console.log(item);
        //     }
        // })