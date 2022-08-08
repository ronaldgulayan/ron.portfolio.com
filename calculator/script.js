
const buttonContainer = document.querySelector(".buttons-container");
const drawerContainer = document.querySelector(".drawer-container");
const menuButton = document.querySelector(".menu-button");
const drawerCancelButton = document.querySelector(".drawer-cancel");

// TIMER FUNCTION
const timerLabel = document.querySelector(".phone-time");
startPhoneTime(timerLabel);

drawButtons(buttonContainer);
hoverEvent();
clickEvent();
buttonFunctionality();

// MENU BUTTON FUNCTION
menuButton.addEventListener("click", () => drawerContainer.classList.add("open"))
drawerCancelButton.addEventListener("click", () => drawerContainer.classList.remove("open"))

// DRAWER CALCULATOR FUNCTION
document.querySelector(".drawer-calculator").addEventListener("click",()=>drawerContainer.classList.remove("open"))

function buttonFunctionality(){

    const endingLabel = document.querySelector(".ending");
    const currentLabel = document.querySelector(".current");
    let currentText = "";

    let number1 = 0;
    let number2 = 0;
    let isOperatorClicked = false;
    let isEqualClicked = false;
    let operatorUsed = "";

    document.querySelectorAll(".button").forEach(element => element.addEventListener("click", event => {

        switch(element.value) {
            case "1": 

                if(!isOperatorClicked) {
                    currentText+="1";
                    currentLabel.innerText = currentText;
                    isEqualClicked = false;
                }else{
                    currentText+="1";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }
                
                break;
            case "2":
                if(!isOperatorClicked) {
                    currentText+="2";
                    currentLabel.innerText = currentText;
                    isEqualClicked = false;
                }else{
                    currentText+="2";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }

                break;
            case "3":
                if(!isOperatorClicked) {
                    currentText+="3";
                    currentLabel.innerText = currentText;
                    isEqualClicked = false;
                }else{
                    currentText+="3";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }

                break;
            case "4":
                if(!isOperatorClicked) {
                    currentText+="4";
                    currentLabel.innerText = currentText;
                    isEqualClicked = false;
                }else{
                    currentText+="4";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }

                break;
            case "5":
                if(!isOperatorClicked) {
                    currentText+="5";
                    currentLabel.innerText = currentText;
                    isEqualClicked = false;
                }else{
                    currentText+="5";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }

                break;
            case "6":
                if(!isOperatorClicked) {
                    currentText+="6";
                    currentLabel.innerText = currentText;
                    isEqualClicked = false;
                }else{
                    currentText+="6";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }

                break;
            case "7":
                if(!isOperatorClicked) {
                    currentText+="7";
                    currentLabel.innerText = currentText;
                    isEqualClicked = false;
                }else{
                    currentText+="7";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }

                break;
            case "8":
                if(!isOperatorClicked) {
                    currentText+="8";
                    currentLabel.innerText = currentText;
                    isEqualClicked = false;
                }else{
                    currentText+="8";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }

                break;
            case "9":
                if(!isOperatorClicked) {
                    currentText+="9";
                    currentLabel.innerText = currentText;
                    isEqualClicked = false;
                }else{
                    currentText+="9";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }

                break;
            case "0":
                if(!isOperatorClicked) {
                    currentText+="0";
                    currentLabel.innerText = currentText;
                    isEqualClicked = false;
                }else{
                    currentText+="0";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }

                break;

            case ".":
                if(!isOperatorClicked) {
                    currentText+=".";
                    currentLabel.innerText = currentText;
                }else{
                    currentText+=".";
                    currentLabel.innerText = currentText;
                    endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                }

                break;

            // OPERATOR ---------

            case "/":
                if(!(isEqualClicked)) {
                    operators("/",currentText);
                }
                break;

            case "x":
                if(!(isEqualClicked)) {
                    operators("*",currentText);
                }
                
                break;
            case "-":
                if(!(isEqualClicked)) {
                    operators("-",currentText);
                }
                break;

            case "+":
                if(!(isEqualClicked)) {
                    operators("+",currentText);      
                }
                break;

            // CLEAR BUTTON
            case "C":
                clear()
                break;

            // EQUAL BUTTON
            case "=":
                equal(currentText);
                break;

            // BACK BUTTON
            case "B":
                if(currentText.length>1){
                    currentText = currentText.slice(0, currentText.length-1)
                    currentLabel.innerText = currentText;
                    if(!(endingLabel.innerText=="0")) {
                        endingLabel.innerText = `${number1} ${operatorUsed} ${currentText}`;
                    }
                }else{
                    currentText = "";
                    currentLabel.innerText = "0";
                }
                
                break;
        }

    }))

    function clear(){
        number1 = 0;
        number2 = 0;
        currentText="";
        isOperatorClicked = false;
        isEqualClicked = false;
        operatorUsed = "";
        endingLabel.innerText = "0";
        currentLabel.innerText = "0";
    }

    function operators(operator, text) {

        isOperatorClicked = true;
        text = Number(text);
        number1 = text;

        currentLabel.innerText = "0";
        currentText = "";
        operatorUsed = operator;

        endingLabel.innerText = `${text} ${operator}`;
    }

    function equal(CurrentText){

        number2 = Number(CurrentText);
        isEqualClicked = true;

        let result = 0;

        if(operatorUsed == "+"){

            result = number1 + number2;
            displayResult(result)

        }else if(operatorUsed == "-"){

            result = number1 - number2;
            displayResult(result)

        }else if(operatorUsed == "*"){

            result = number1 * number2;
            displayResult(result)

        }else if(operatorUsed == "/"){

            result = number1 / number2;
            displayResult(result)

        }

    }

    function displayResult(result){

        number1 = result;
        currentLabel.innerText = "="+result;

        // reset
        number2 = 0;
        currentText = "";
        endingLabel.innerText = "0";
        isOperatorClicked = false;
        operatorUsed = "";

    }

}

function drawButtons(parent) {
    const buttonsText = "C_B/789x456-123+0.=";
    for(let i=0;i<19;i++){
        let button = document.createElement("button");
        button.id = `button-${buttonsText[i]}`
        button.classList.add("button");
        button.innerText = buttonsText[i];
        button.style.borderRadius = "60px";
        button.style.backgroundColor = "#333";
        button.style.fontFamily = "sans-serif";
        button.value = buttonsText[i];
        button.style.color = "#fff";
        button.style.fontSize = "17px";
        button.style.border = "none";
        button.style.cursor = "pointer";
        parent.append(button);
    }
}

function hoverEvent(){
    document.querySelectorAll(".button").forEach(element=>{
        element.onmouseenter = () => {
            element.style.backgroundColor = "#444";
        }
        element.onmouseleave = () => {
            element.style.backgroundColor = "#333";
        }
    })
}

function clickEvent(){
    document.querySelectorAll(".button").forEach(element=>{
        element.onmousedown = () => {
            element.style.backgroundColor = "#2e2e2e";
        }
        element.onmouseup = () => {
            element.style.backgroundColor = "#444";
        }
    })
}

function startPhoneTime(timeLabel) {

    setInterval(()=>{

        const date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();

        let amOrPm = hours>12?"pm":"am";

        hours = (hours % 12) || 12;
        hours = formatZero(hours);
        minutes = formatZero(minutes);

        timeLabel.innerText = `${hours}:${minutes} ${amOrPm}`

    },1000);

    function formatZero(number) {
        number = String(number)
        return number.length == 1 ? "0"+number:number
    }

}

