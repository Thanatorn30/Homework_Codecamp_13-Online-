function cloneObject(...obj){
    return Object.assign(obj)
}
console.log(cloneObject({name:'peet'},{age:27},{address:'Thailand'}));