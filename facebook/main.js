
const eyeButton = document.querySelector(".eye-button");
const passwordField = document.querySelector(".password-field")
const popupContainer = document.querySelector(".popup-container");
const popupOkButton = document.querySelector(".popup-ok-button");
let isEyeOpen = !Boolean(eyeButton.getAttribute("data-eye-open"))

// BUTTONS
const loginButton = document.querySelector(".login-button");
const forgotPasswordButton = document.querySelector(".forgot-password");
const forgotCancelButton = document.querySelector(".forgot-password-cancel");
const createNewAccountButton = document.querySelector(".create-account");
const createNewAccountCancelButton = document.querySelector(".join-next-button-cancel");
const createNewAccountNextButton = document.querySelector(".join-next-button");
const signupEmailButton = document.querySelector(".signup-email");
const signupNumberButton = document.querySelector(".signup-number");
const firstStepNextButton = document.querySelector(".first-step-next");

// SCREEN
const loginScreen = document.querySelector(".login-screen");
const forgotPasswordScreen = document.querySelector(".forgot-password-container");
const createAccountScreen = document.querySelector(".create-account-screen");
const firstStepScreen = document.querySelector(".create-first-step-screen");
const secondStepScreen = document.querySelector(".create-second-step-screen");

// SECOND STEP SCREEN
const signupWithNumberScreen = document.querySelector(".signup-with-number");
const signupWithEmailScreen = document.querySelector(".signup-with-email");

loginButton.addEventListener("click", () => {
    let email = document.querySelector(".email-field").value;
    let password = document.querySelector(".password-field").value;
    
    if(!(email == "") || !(password == "")){
        window.location.href = "home.html";
    }else{
        popupContainer.classList.add("open")
    }
    document.querySelector(".email-field").value = "";
    document.querySelector(".password-field").value = "";

})

popupOkButton.addEventListener("click", () => {
    popupContainer.classList.remove("open")
})

eyeButton.addEventListener("click", () => {
    
    if(!isEyeOpen){
        passwordField.type = "text";
        eyeButton.src = "img/view.png";
        isEyeOpen = true;
    }else{
        passwordField.type = "password";
        eyeButton.src = "img/hidden.png";
        isEyeOpen = false;
    }

})

forgotPasswordButton.addEventListener("click", () => {
    loginScreen.style.display = "none";
    forgotPasswordScreen.style.display = "flex";
})

forgotCancelButton.addEventListener("click", () => {
    loginScreen.style.display = "flex";
    forgotPasswordScreen.style.display = "none";
})

createNewAccountButton.addEventListener("click", () => {
    loginScreen.style.display = "none";
    createAccountScreen.style.display = "flex";
})

createNewAccountCancelButton.addEventListener("click", () => {
    loginScreen.style.display = "flex";
    createAccountScreen.style.display = "none";
})

createNewAccountNextButton.addEventListener("click", () => {
    createAccountScreen.style.display = "none";
    firstStepScreen.style.display = "flex";
})

// SIGN UP SECOND STEP FUNCTION
signupEmailButton.addEventListener("click", () => {
    signupWithEmailScreen.style.display = "none";
    signupWithNumberScreen.style.display = "flex";
})

signupNumberButton.addEventListener("click", () => {
    signupWithEmailScreen.style.display = "flex";
    signupWithNumberScreen.style.display = "none";
})

firstStepNextButton.addEventListener("click", () => {
    firstStepScreen.style.display = "none";
    secondStepScreen.style.display = "flex";
})

document.querySelectorAll(".languages").forEach((element,index,arrays) => element.addEventListener("click", () => {
    
    for(let i=0;i<arrays.length;i++) {

        if(element==arrays[i]) {
            element.style.color = "black";
        }else{
            arrays[i].style.color = "blue";
        }

    }

}))
