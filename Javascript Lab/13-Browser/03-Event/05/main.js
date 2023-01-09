const body = document.querySelector('body')
const input1 = document.createElement('input')
const input2 = document.createElement('input')
body.prepend(input1)
body.prepend(input2)
input1.name = 'nickname'
input1.value = 'input1'
input2.name = 'Job'
input2.oninput = 'input2'
input1.addEventListener('click',function(event){
    console.log(input1.name)
})
input2.addEventListener('click',function(event){
    console.log(input2.value);
})
