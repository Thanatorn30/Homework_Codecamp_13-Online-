let arr =[1,2,3,4,8,9,6]
let newArr = arr.map(function(item,index){
    let check = (index == 3 ? item**2 : item)
    return check
})
console.log(newArr);
console.log(arr);