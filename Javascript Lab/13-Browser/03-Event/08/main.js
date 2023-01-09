// create btn
const body = document.querySelector('body')
const addBtn = document.createElement('button')
addBtn.innerText = 'Hide'
body.prepend(addBtn)
// create hide function , change text to show
const hide = function(){
    if(addBtn.innerText = "Hide"){
        addBtn.innerText = "Show"
        addBtn.addEventListener('click',function(){
            addBtn.innerText = "Hide"
        })
    }
}
addBtn.addEventListener('click',hide)

