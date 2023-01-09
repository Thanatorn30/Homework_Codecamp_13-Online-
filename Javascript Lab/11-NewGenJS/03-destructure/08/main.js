// INPUT = Obj
// OUTPUT = alert
function checkAge({name,lastname,age}){
    if(age>18){
        alert(`Hi ${name} ${lastname}`)
    }else{
        alert(`Can't access`)
    }
}
let obj1 = {
    name:'Lionel',
    lastname:'Messi',
    age:8
}
console.log(checkAge(obj1));