var mbMenuBtn = document.getElementById("mb-menu-btn");
var mainMenu = document.getElementById("main-menu");
var mbMenuIcon = document.getElementById("mb-menu-icon");


mbMenuBtn.onclick = function(){
    mainMenu.classList.toggle("showmenu")
    mbMenuIcon.classList.toggle("fa-bars")
    mbMenuIcon.classList.toggle("fa-times")
}