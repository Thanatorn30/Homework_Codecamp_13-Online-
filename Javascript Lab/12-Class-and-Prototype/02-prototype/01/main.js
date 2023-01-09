let arr1 = [1,2,3,4,5]
// let max = function(arr){
//     arr.sort(function(a,b){
//         if(a>b) return -1;
//         if(a===b) return 0;
//         if(a<b) return 1;
//     })
//     return arr[0]
// }
// console.log(max(arr1));

Array.prototype.max = function(arr){
    arr.sort(function(a,b){
        if(a>b) return -1;
        if(a===b) return 0;
        if(a<b) return 1;
    })
    return arr[0]
}

arr1.max()