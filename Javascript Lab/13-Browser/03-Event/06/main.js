const body = document.querySelector('body')
const btn = document.createElement('button')
btn.innerHTML = 'Click to hide'
body.prepend(btn)
const hide = function(){
    btn.remove()
}
btn.addEventListener('click',hide)
