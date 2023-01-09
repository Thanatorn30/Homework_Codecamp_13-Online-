// ------------------Lab1-----------------
    // const array = [1, 2, 30, 400];// result: [2, 4, 60, 800]
    // let resultArr = array.map((item)=>{return item*2})
    // console.log(resultArr);

    // const array = [1, 2, 3, 4]; // result: ["1", "2", "3", "4"]
    // const result = array.map((item)=>{return item.toString()})
    // console.log(result);

    // const array = [1, '1', 2, {}]; // result: ["number", "string", "number", "object"]
    // const result = array.map((item)=>{return typeof(item)})
    // console.log(result);
    
    // const array = ['apple', 'banana', 'orange'];// result: ["APPLE", "BANANA", "ORANGE"]
    // const result = array.map((item)=>{ return item.toUpperCase()})
    // console.log(result);

    // const array = [1, 3, 4, 5, 6, 7, 8];// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
    // const result = array.map((item)=>{
    //     if(item%2 ==0){
    //         return "odd"
    //     }else{
    //         return "even"
    //     }
    // })
    // console.log(result);

    // const array = [1, -3, 2, 8, -4, 5]; // result: [1, 3, 2, 8, 4, 5]
    // const result = array.map((item)=>{
    //     if(item<0){
    //         return item * -1
    //     }else{
    //         return item
    //     }
    // })
    // console.log(result);
    
    // const array = [100, 200.25, 300.84, 400.3];// result: ["100.00", "200.25", "300.84", "400.30"]
    // const result = array.map((item)=>{
    //     return item.toFixed(2)
    // })
    // console.log(result);
    // const array = [0, 5, 10, 7, 6, 5, 0];// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
    // const month = ['Jan','Fab','Mar','Api','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    // const result = array.map((item)=>{
    //     return month[item]
    // })
    // console.log(result);

    // const array = [1, 16, 81, 256, 625, 1296];// result: [1, 2, 3, 4, 5, 6]
    // const result = array.map((item,index)=>{
    //     return index+1
    // })
    // console.log(result);

    // const array = [
    //     { name: 'apple', age: 14 },
    //     { name: 'banana', age: 18 },
    //     { name: 'watermelon', age: 32 }
    // ];
    // // result: ["apple", "banana", "watermelon"]
    // const result = array.map((item)=>{
    //     return item.name
    // })
    // const ageResult = array.map((item)=>{return item.age})
    // console.log(result);
    // console.log(ageResult);

    // const array = [
    //         { name: 'apple', surname: 'London' },
    //         { name: 'banana', surname: 'Bangkok' },
    //         { name: 'watermelon', surname: 'Singapore' }
    //     ];// result: ["apple London", "banana Bangkok", "watermelon Singapore"]

    // const nameResult = array.map((item)=>{
    //     return `${item.name} ${item.surname}`
    // })
    // console.log(nameResult);

    // const array = [
    //     { name: 'apple', 
    //     birth: '2000-01-01'
    //  },
    //     { name: 'banana', birth: '1990-10-01' },
    //     { name: 'watermelon', birth: '1985-12-01' }
    // ];
   
    // // result: [
    // //   { name: "apple", birth: "2000-01-01", age: 21 },
    // //   { name: "banana", birth: "1990-10-01", age: 31 },
    // //   { name: "watermelon", birth: "1985-12-01", age: 36 },
    // // ]

    // const result = array.map((item,index)=>{
    //         item.age = 2021-item.birth.slice(0,4)
    //     return item
    // })
    // console.log(result);

    // ------------------Lab3-----------------
    // const arr = [11, 17, 23, 13, 7, 19]; // จงเรียงข้อมูลใน arr จากมากไปหาน้อย
   
    // let  sortResult =function (a,b){
    //         if(a>b) return -1;
    //         if(a===b) return 0;
    //         if(a<b) return 1;
    // }
    // arr.sort(sortResult)

    // ------------------Lab4-----------------
    // const arr = [-3, 2, 0, -7, 4, 6];
    // // จงเรียงข้อมูลใน arr โดยเรียงตามค่า element ยกกำลัง 2 จากน้อยไปหามาก
    // const newArr = arr.map((item)=>{
    //     return item**2
    // })
    // function compare(a,b){
    //     if(a>b) return 1;
    //     if(a===b) return 0;
    //     if(a<b) return -1
    // }
    // newArr.sort(compare)
    // console.log(newArr);
    // // console.log(newArr);

    // ------------------Lab5-----------------
    // const arr = [
    //     { name: 'John', age: 25 },
    //     { name: 'Leon', age: 26 },
    //     { name: 'Mick', age: 29 },
    //     { name: 'Pete', age: 30 },
    //     { name: 'Mary', age: 28 }
    // ];

    // function compare(a,b){
    //     if(a.age>b.age) return 1;
    //     if(a.age===b.age) return 0;
    //     if(a.age<b.age) return -1
    // }

    // let newArr = arr.map((item)=>{return item})
    // newArr.sort(compare)
    // console.log(newArr);


    // ------------------Lab6-----------------
    // let array = ['React', 'Vue', 'Angular'];
    // let newArr = array.map((item)=>{return item})

    // function compare(a,b){
    //     if(a>b) return 1;
    //     if(a===b) return 0;
    //     if(a<b) return -1
    // }

    // newArr.sort(compare)
    // console.log(newArr);
    // console.log(array);