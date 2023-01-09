function calc(...number){
  let result = number.reduce((acc,item)=>{
    acc *= item
    return acc
  },1)
  return result
}
console.log(calc(10,12));