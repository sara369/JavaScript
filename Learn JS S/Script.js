var  menuItem = document.getElementById("menu").getElementsByTagName("li");
var headLine = document.getElementById("text");
var btn = document.getElementById("click");
var myMenu = document.getElementById("menu");
var counter = 5;


// menuItem[0].innerHTML = "Hello from menueItem 0";
for (i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener("click", selectItem);
}

function selectItem (){
    headLine.innerHTML = this.innerHTML;
}

btn.addEventListener("click", newItem);

function newItem(){

    myMenu.innerHTML += "<li>list " + counter + "</li>";
    counter++;
}