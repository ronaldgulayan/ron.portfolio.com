
import { CreateLowerContainer } from "./import.js";

const menuButton = document.querySelector(".menu-button");
const menuDrawer = document.querySelector(".upper-drawer");
let drawerIsOpen = false;

menuButton.addEventListener("click",()=>{
    if(!drawerIsOpen){
        menuDrawer.classList.add("open");
        menuButton.classList.add("open");
        drawerIsOpen = true;
    }else{
        menuButton.classList.remove("open");
        menuDrawer.classList.remove("open");
        drawerIsOpen = false;
    }
})

document.querySelector(".project-button").addEventListener("click", ()=>{
    window.location.href = "project.html"
})

//CONTAINER
const container = new CreateLowerContainer("lower-container","#fff", "50px");
CreateLowerContainer.addStyle("#lower-container").boxShadow = "0px -1px 5px rgb(0,0,0,.2)"

//ELEMENT
container.addText("text1", "RonaldGulayan", "20px","#000", "sans-serif", "white", "0px 2px 5px rgb(0,0,0,.5)")
CreateLowerContainer.addStyle(".text1").marginTop = "10px";
container.addText("text2", "ronaldgulayan00@gmail.com", "16px","#000", "sans-serif", "white", "0px 2px 5px rgb(0,0,0,.2)")
CreateLowerContainer.addStyle(".text2").fontStyle = "italic";

//BUTTONS
container.CreateButtons()
CreateLowerContainer.addButtonsEvent();
