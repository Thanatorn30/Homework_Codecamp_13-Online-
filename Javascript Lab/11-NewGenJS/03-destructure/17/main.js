const names = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jack', lastName: 'Dann' },
    { firstName: 'Joe', lastName: 'Dunne' }
  ];

  const [...a] = names
  for(let item of a){
    console.log(item);
  }