const body = document.querySelector('body')
const addBtn = document.createElement('button')
addBtn.innerText = "Click to hide text"
body.prepend(addBtn)
const hideText = function(){
    addBtn.innerText = null
}
addBtn.addEventListener('click',hideText)