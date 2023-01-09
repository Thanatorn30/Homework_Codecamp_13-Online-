let newSet = new Set();
newSet.add('Thailand')
newSet.add('Japan')
newSet.add('Thailand')
newSet.add('China')
newSet.add('India')
newSet.add('Thailand')
newSet.add('China')
newSet.add('Singapore')
newSet.add('Japan')
newSet.delete('India')
console.log(newSet.size);
let arr = []
arr.push(newSet)
console.log(arr);
console.log(newSet);