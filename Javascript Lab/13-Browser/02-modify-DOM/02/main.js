// const div = document.createElement('div')
// div.innerHTML
// console.log(div);



// function clear(elem) { /* your code */ }
// clear(elem); // clears the list
const ul = document.createElement('ul')
const body = document.querySelector('body')
body.prepend(ul)
const li = document.createElement('li')
ul.prepend(li)
li.innerHTML = prompt('Text')








