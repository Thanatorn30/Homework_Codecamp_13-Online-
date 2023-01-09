let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
};

let {John,Pete,Mary} = salaries
function topSalary(a,b,c){
    if(a>b && a>c){
        return a
    }if(b>a && b>c){
        return b
    }else{
        return c
    }
}
console.log(topSalary(John,Pete,Mary));