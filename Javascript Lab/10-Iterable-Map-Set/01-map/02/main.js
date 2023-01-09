const arr = [
    ['email', 'codeisfun@example.com'],
    ['isActive', true]
];
let newArr = function (arr){
    let result = arr.reduce((acc,item,index)=>{
        acc[item[0]] = item[1]
        return acc
    },{})
    return result
}
let arrMap = Object.entries(newArr(arr))
console.log(arrMap);

let map = new Map(arrMap)
console.log(map);
