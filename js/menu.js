const menu = document.querySelector(".menu");

const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menu-icon");


function openCloseMenu() {
   
    if (menu.classList.contains("showMenu")) {
       
        menu.classList.remove("showMenu");

        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        console.log("done")

       
        menu.classList.add("showMenu");
        
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}