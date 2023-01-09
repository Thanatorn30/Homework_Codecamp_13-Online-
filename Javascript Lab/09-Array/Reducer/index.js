// ------------------Lab1-----------------
    // const nums = [-3, 2, 11, -7, 4, 6];
    // let result = nums.reduce(function(acc,item){ return acc*item},1)
    // console.log(result);

    // ------------------Lab2-----------------
    // let john = { name: 'John', age: 27 };
    // let jo = { name: 'Jo', age: 21 };
    // let jin = { name: 'Jin', age: 25 };
    // let arr = [john, jo, jin];
    
    // function getAverage(arr){
    //     let averageAge;
    //     let result = arr.reduce((acc,item,index)=>{
    //       return acc+item.age
    //     },0)
    //     averageAge = result/(arr.length)
        
    //     return  averageAge
    // }

    // ------------------Lab3-----------------
    // const scores = [
    //     { score: 90, subject: 'HTML', weight: 0.2 },
    //     { score: 95, subject: 'CSS', weight: 0.3 },
    //     { score: 85, subject: 'JavaScript', weight: 0.5 }
    // ];
    // // expected result: 89
    // let result = scores.reduce((acc,item)=>{
    //     return acc + item.score * item.weight
        
    // },0)
    // console.log(result);

    // ------------------Lab4-----------------
    // let flattened = [
    //     [0, 1],
    //     [2, 3],
    //     [4, 5]
    // ];
    // // expected result: [0, 1, 2, 3, 4, 5]

    // function arr (array){
    //     let arrFlat = array.reduce((acc,item)=>{
    //         acc.push(...item)
    //         return acc
    //     },[])
    //     return arrFlat
    // }
    // console.log(arr(flattened));


    
    // ------------------Lab6-----------------
    // let str = '31 45 12 67 34 86 23 37 19 41';
    // let arr = str.split(' ')
    // let arrNum = arr.map((item)=>{ return Number(item)})
    // let check = arrNum.reduce((acc,item)=>{
    //     if(item < 40){
    //         acc += item
    //     }
    //     return acc
    // },0)
    // console.log(check);

    // ------------------Lab7-----------------
    // let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
    // // expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}
    // // let count = {}

    // function count (arr){
    //     let obj = {
    //         Jack : 0,
    //         John : 0,
    //         Bill : 0,
    //         Rick : 0

    //     }
    //     let name  = arr.reduce((acc,item,index)=>{
    //       if(!acc[item]){
    //         acc[item]=1
    //       }else{
    //         acc[item] += 1
    //       }
    //       return acc
    //     },{})
    //     return name
    // }
    // console.log(count(names));
   
    // ------------------Lab8-----------------
    // let str = 'I live in Thailand';
    // // expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
    // let strTolowerCase = str.toLocaleLowerCase()
    // let arr = strTolowerCase.split(' ')
    // let test = [...arr[1]]
    
    // let arrSpread = arr.reduce((acc,item,index)=>{
    //     acc.push(...item)
    //     return acc
    // },[])
    
    // function calc (arr){
    //     let result = arr.reduce((acc,item)=>{
    //         if(!acc[item]){
    //              acc[item] = 1
    //         }else{
    //              acc[item] += 1
    //         }
            
    //         return acc
    //     },{})

    //     return result
    // }
    // console.log(calc(arrSpread));
    
    // ------------------Lab9-----------------
    // let alpha = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
    // // expected result: ['a', 'b', 'c', 'e', 'd']
    // const result = alpha.reduce((acc,item)=>{
    //     if(!acc.includes(item)){
    //         acc.push(item)
    //     }
    //     return acc
    // },[])
    // console.log(result);

    // ------------------Lab10-----------------
        // const products = [
        //     { id: 1, name: 'Crystal' },
        //     { id: 4, name: 'Namthip' },
        //     { id: 5, name: 'Nestle' }
        // ];
    //     // { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };
    //     /*
    //         Output = { key : { } }
        
    //     */
    //    function result(arr){
    //         let obj = arr.reduce((acc,item)=>{
    //             acc[item.id] = item.name
    //             return acc
    //         },{})
    //         return obj
    //    }
    //    console.log(result(products));
