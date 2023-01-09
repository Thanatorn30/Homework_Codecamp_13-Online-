/*
INPUT = OBJ
OUT PUT = OBJ

*/

function mergeObjects(...obj){
    let result = obj.reduce((acc,item)=>{
       acc[item] = item
       return acc
    },{})
    
    return result
}

console.log(mergeObjects(2,3,6,'name',1));
