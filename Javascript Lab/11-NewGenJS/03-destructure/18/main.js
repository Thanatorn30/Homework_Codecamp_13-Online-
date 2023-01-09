const users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
  ];

const [...a] = users
for(let item of a){
    if(item.age == undefined){
        item.age = 'Unknow'
        console.log(item);
    }else{
        console.log(item);
    };
    
}