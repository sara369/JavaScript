let addToDoButton= document.getElementById('addToDo');
let toDoContainer= document.getElementById('toDoContainer');
let inputField= document.getElementById('inputFieled');

addToDoButton.addEventListener('click', function(){
    var paragraph= document.createElement('p');
    paragraph.innerText= inputField.;
    toDoContainer.appendChild(paragraph);
})