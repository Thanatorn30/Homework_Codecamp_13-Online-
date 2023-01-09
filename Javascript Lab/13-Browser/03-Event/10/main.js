// -------------------Province---------------
const body = document.querySelector('body')
const addForm1 = document.createElement('form');
const addLabel = document.createElement('label')
const addSelect1 = document.createElement('select')
const addOption1 = document.createElement('option')
const addOption2 = document.createElement('option')
const addOption3 = document.createElement('option')
const addOption4 = document.createElement('option')
const br = document.createElement('br')
br.before(addForm1)

body.prepend(addForm1)
addForm1.prepend(addLabel)
addForm1.append(addSelect1)
addSelect1.prepend(addOption1)
addSelect1.prepend(addOption2)
addSelect1.prepend(addOption3)
addSelect1.prepend(addOption4)

addLabel.innerText = 'Province : '
addOption1.innerHTML = 'BKK'
addOption2.innerHTML = 'Chiang-Mai'
addOption3.innerHTML = 'Chiang-Rai'
addOption4.innerHTML = 'Sara-buri'

// -------------------District---------------
