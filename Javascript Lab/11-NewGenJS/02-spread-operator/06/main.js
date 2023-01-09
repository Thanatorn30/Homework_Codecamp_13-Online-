const arr2 = function cloneArray(...arr){
    let result = arr.map(function(item){
        return item*2
    })
    return result
}
console.log(arr2(1,36,4,9,4));