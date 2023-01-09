const body = document.querySelector('body')
const a = document.querySelector('a');

const handler = function(){
    let check = confirm('Leave for https://google.com?')
    if(Boolean(check) == true){
        a.href = "https://google.com"
    }else{
        a.href = " "
    }
}
a.addEventListener('click',handler)

