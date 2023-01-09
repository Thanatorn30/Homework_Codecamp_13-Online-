const values = [1, 4, 8, 2, 1, 3, 3, 8];
function unique(arr){
    let result = new Set(arr)
    let newArr = Array.from(result)
    return newArr
}
console.log(unique(values));