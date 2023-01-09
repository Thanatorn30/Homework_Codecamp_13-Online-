const ul = document.querySelector('ul')
const btnAdd = document.querySelector('.btn-add');
const editAdd = document.querySelector('.btn-edit')
const delAdd = document.querySelector('btn-del')
const input = document.querySelector('input')
const span = document.createElement('span')


// ----create add event -----------
const addEvent = function(){
   
    // ----create li-----------
    const li = document.createElement('li')
    ul.append(li)
    // ----create span---------
    // const span = document.createElement('span')
    li.prepend(span)
    span.innerText = input.value 
   
    // ----create Edit---------
   const edit = document.createElement('button')
   edit.innerText = 'Edit'
   li.append(edit)

   // ----create Del---------
   const del = document.createElement('button')
   del.innerText = 'Del'
   li.append(del)
    
}
// ----create Edit event -----------

btnAdd.addEventListener('click',addEvent)
