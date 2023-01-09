const btn = document.querySelector('.btn')
// btn.style.backgroundColor = 'red'
setTimeout(function(){
    btn.classList.add('wb')
},3000)
setTimeout(function(){
    btn.classList.remove('wb')
},6000)
