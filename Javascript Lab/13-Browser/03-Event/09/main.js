const body = document.querySelector('body')
// create form
// const addForm = document.createElement('form');
// body.prepend(addForm)

// create <input>
const addInput = document.createElement('input')
addInput.value = "Phone Number"
addInput.type = 'text'
body.prepend(addInput)
addInput.addEventListener('click',function(){
    addInput.value = null
})

// create <Button>
const addBtn = document.createElement('button')
addBtn.innerText = "Check"
body.append(addBtn)
const button = document.querySelector('button')

// create noticication
const p = document.createElement('p')
p.innerText = " "
p.style.color = 'red'
body.append(p)


// create function check
const check = function(){
    if(isNaN(addInput.value) == true){
        p.innerText = 'Phone Number is invalid'
    }else{
       alert('Your number is valid')
       return p.remove()
    }
   
}
button.addEventListener('click',check)