
import { CreateProject, CreateLowerContainer, CreateVideoProject } from "./import.js";

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

// MAX WEBSITE
new CreateProject("#content","https://bit.ly/3Os5uQh", "#bbb", "project-img/max.jpg", ["html", "css", "javascript"],"Max Website","This is our dog website");

// MY FIRST PORTFOLIO
new CreateProject("#content","https://ronaldgulayan.github.io/my-website-main.com/Ronald.html", "#bbb", "project-img/img-2.jpeg", ["html", "css", "javascript"],"My First Portfolio","This is my first portfolio.")

// MY FIRST STUDENT FORM
new CreateProject("#content","https://ronaldgulayan.github.io/student_form.com/Ronald.html", "#bbb", "project-img/studentform.png", ["html", "css"],"My First Student Form","This is my first Student form");

// CHATTING APPLICATION
new CreateProject("#content","https://www.mediafire.com/file/p8q4mxmsjryfeep/chatapp-0.1-arm64-v8a_armeabi-v7a-debug.apk/file", "#bbb", "project-img/chatapp.png", ["Python","Kivy","Kivymd"],"Chatapp Application","Chat application");

// PORTFOLIO APPLICATION
new CreateProject("#content","https://www.mediafire.com/file/hs7hleonj8ymv4q/exampleApp.apk/file", "#bbb", "project-img/img-3.jpg", ["Java"],"Code Art apps","This is my portfolio application");

// MY APPLICATION
new CreateProject("#content","https://www.mediafire.com/file/deu67px757jcl79/Ron_application.apk/file", "#bbb", "project-img/person.gif", ["Python", "Kivy", "Kivymd"],"Ron Application","-");

// VIDEO 1
new CreateVideoProject("#content", "vid/shop-system.MP4", "#bbb", "img/ordering-img.png", ["Java", "MySQL"], "Shop Ordering System", "This is my first shop ordering system")

// VIDEO 2
new CreateVideoProject("#content", "vid/school-management-system.MP4", "#bbb", "img/school-system.png", ["Java", "MySQL"], "School Management System", "This is my School management System")

// CALCULATOR
new CreateProject("#content", "calculator/main.html", "#bbb", "img/calculator.png", ["html", "css", "javascript"], "Calculator", "This is my calculator design")

// TIC TAC TOE PROJECT
new CreateVideoProject("#content", "vid/tic-vid.mp4", "#bbb", "img/tic-img.png", ["Java"], "Tic Tac Toe", "This is my tic tac toe")

// BMI CALCULATOR
new CreateVideoProject("#content", "vid/bmi-vid.mp4", "#bbb", "img/bmi-img.png", ["Java", "mysql"], "BMI Calculator", "This is a BMI calculator(Body mass index).")

// FACEBOOK CLONE
new CreateProject("#content","facebook/main.html", "#bbb", "img/facebook.png", ["html", "css", "javascript"],"Facebook lite clone","This is my facebook lite clone design");

// ROCK PAPER AND SCISSOR
new CreateProject("#content","rockpaperscissor/main.html", "#bbb", "img/rockpaper-img.png", ["html", "css", "javascript"],"Rock paper scissor","Trippings");

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

//ELEMENT

//CONTAINER
const container = new CreateLowerContainer("lower-container","#fff", "50px");
CreateLowerContainer.addStyle("#lower-container").boxShadow = "0px -1px 5px rgb(0,0,0,.2)"

container.addText("text1", "RonaldGulayan", "20px","#000", "sans-serif", "white", "0px 2px 5px rgb(0,0,0,.5)")
CreateLowerContainer.addStyle(".text1").marginTop = "10px";
container.addText("text2", "ronaldgulayan00@gmail.com", "16px","#000", "sans-serif", "white", "0px 2px 5px rgb(0,0,0,.2)")
CreateLowerContainer.addStyle(".text2").fontStyle = "italic";

//BUTTONS
container.CreateButtons()
CreateLowerContainer.addButtonsEvent();

