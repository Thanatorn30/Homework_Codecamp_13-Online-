function filterOutOdds (...number){
    let arr = []
    for(let item of number){
        if(item%2 !== 0){
          arr.push(item)
        }
    }
    return arr
}
console.log(filterOutOdds(1,2,3,4,5,6,7));