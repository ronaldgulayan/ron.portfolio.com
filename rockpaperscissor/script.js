
const alliedNextHeroButton = document.querySelector(".allied-hero-button-next");
const alliedHeroImage = document.querySelector(".allied-hero");
const startButton = document.querySelector(".start-button");
const pro = true;

const enemyAttack = [
    "img/enemy/enemy-rock.png",
    "img/enemy/enemy-paper.png",
    "img/enemy/enemy-scissor.png"]

const alliedHeroes = [
    "img/char/allied-image-1.png",
    "img/char/allied-image-2.png",
    "img/char/allied-image-3.png"];

const enemyHeroes = [
    "img/char/enemy-image-1.png",
    "img/char/enemy-image-2.png",
    "img/char/enemy-image-3.png"];;

document.querySelector(".enemy-hero").src = enemyHeroes[Math.floor(Math.random()*enemyHeroes.length)]

let choosed = false;

let heroIndex = 0;
alliedNextHeroButton.addEventListener("click", () => {
    heroIndex+=1;
    heroIndex = heroIndex>alliedHeroes.length-1?0:heroIndex
    alliedHeroImage.src = alliedHeroes[heroIndex];
})

// START BUTTON FUNCTION
startButton.addEventListener("click", () => {

    const nameField = document.querySelector(".name-field");
    const alliedName = document.querySelector(".allied-name");

    document.querySelector(".fight-field-container").classList.add("start");
    document.querySelector(".choose-hero-text").innerText = "Fight!"
    document.querySelector(".buttons-container").classList.add("start");
    document.querySelectorAll(".hp").forEach(e=>e.style.opacity = "1")
    document.querySelector(".fighting-field").style.opacity = "1"
    document.querySelector(".start-button-container").style.display = "none";
    alliedNextHeroButton.style.display = "none"

    document.querySelectorAll(".name").forEach(element=>element.style.opacity = "1")
    alliedName.innerText = nameField.value==""?"No name":nameField.value;

})

document.querySelector(".fight-button").addEventListener("click", () => {

    const label = document.querySelector(".result-field").innerText;
    if(!(choosed)) return
    
    const enemyField = document.querySelector(".enemy-field");
    enemyField.style.display = "block";

    // ENEMY CHOSEN ATTACK
    let enemyRandomAttack = enemyAttack[Math.ceil(Math.random()*enemyAttack.length-1)];

    // ALLIED CHOSEN ATTACK
    let alliedChosenAttack = document.querySelector(".allied-field").getAttribute("src");

    enemyRandomAttack = converPathToAttack("Enemy", enemyRandomAttack);
    alliedChosenAttack = converPathToAttack("Allied", alliedChosenAttack);

    // IF ENEMY HEALTH IS LESS THAN 100
    if(Number(document.querySelector(".enemy-health").value) <= 61){

        if(alliedChosenAttack==="rock"){

            if(enemyRandomAttack!="paper"){
                enemyRandomAttack = enemyAttack[Math.ceil(Math.random()*enemyAttack.length-1)];
                enemyRandomAttack = converPathToAttack("Enemy", enemyRandomAttack);
                enemyRandomAttack = proMode("paper",enemyRandomAttack,pro);
            }

        }else if(alliedChosenAttack==="paper") {

            if(enemyRandomAttack!="scissor"){
                enemyRandomAttack = enemyAttack[Math.ceil(Math.random()*enemyAttack.length-1)];
                enemyRandomAttack = converPathToAttack("Enemy", enemyRandomAttack);
                enemyRandomAttack = proMode("scissor",enemyRandomAttack,pro);
            }

        }else if(alliedChosenAttack==="scissor") {
            
            if(enemyRandomAttack!="rock"){
                enemyRandomAttack = enemyAttack[Math.ceil(Math.random()*enemyAttack.length-1)];
                enemyRandomAttack = converPathToAttack("Enemy", enemyRandomAttack);
                enemyRandomAttack = proMode("rock",enemyRandomAttack,pro);
            }

        }

    }

    alliedChosenAttack = convertTypeOfAttackToPath("Allied", alliedChosenAttack);
    enemyRandomAttack = convertTypeOfAttackToPath("Enemy", enemyRandomAttack);

    // CHECK WINNER
    document.querySelector(".enemy-field").src = enemyRandomAttack;
    const winner = winnerChecker(alliedChosenAttack,enemyRandomAttack);
    drawResultToLabel(winner);
    drawMovement(winner)

    // BACK TO TYPES OF ATTACK
    alliedChosenAttack = converPathToAttack("Allied", alliedChosenAttack);
    enemyRandomAttack = converPathToAttack("Enemy", enemyRandomAttack);

    // DAMAGE EFFECT
    setTimeout(()=>{
        if(winner==="Allied"){
            damageEffect(winner,alliedChosenAttack);
        }else if(winner==="Enemy"){
            damageEffect(winner,enemyRandomAttack);
        } 
    },1500);

    resetButtonEffect(winner);

})

document.querySelector(".reset-button").addEventListener("click", reset);

// ROCK - PAPER - SCISSOR BUTTONS

const alliedField = document.querySelector(".allied-field");
document.querySelectorAll(".button").forEach(element => element.addEventListener("click", () => {
    choosed = true;
    alliedField.src = element.getAttribute("data-path");
    buttonClicked()
}))

function convertTypeOfAttackToPath(hero,attack) {

    let path = null;

    if(hero==="Allied"){

        switch(attack) {
            case "rock":
                path = "img/allied/allied-rock.png";
                break;
            case "paper":
                path = "img/allied/allied-paper.png";
                break;
            case "scissor":
                path = "img/allied/allied-scissor.png";
                break;
        }

    }else if(hero==="Enemy"){

        switch(attack) {
            case "rock":
                path = "img/enemy/enemy-rock.png";
                break;
            case "paper":
                path = "img/enemy/enemy-paper.png";
                break;
            case "scissor":
                path = "img/enemy/enemy-scissor.png";
                break;
        }

    }

    return path;

}


function buttonClicked(){
    const alliedField = document.querySelector(".allied-field");
    alliedField.style.display = "block";
}

function winnerChecker(alliedAttack, enemyAttack){

    let allied;
    let enemy;
    let winner;

    switch(enemyAttack){
        case "img/enemy/enemy-rock.png":
            enemy = "rock";
            break;
        case "img/enemy/enemy-paper.png":
            enemy = "paper";
            break;
        case "img/enemy/enemy-scissor.png":
            enemy = "scissor";
            break;
        default:
            alert("Wala naman sa allied")
    }

    switch(alliedAttack){
        case "img/allied/allied-rock.png":
            allied = "rock";
            break;
        case "img/allied/allied-paper.png":
            allied = "paper";
            break;
        case "img/allied/allied-scissor.png":
            allied = "scissor";
            break;
        default:
            alert("Wala naman sa enemy")
    }

    if(allied===enemy){
        winner = "It's a tie!"
    }else if(allied==="rock"){

        if(enemy==="paper"){
            winner = "Enemy"
        }else if(enemy==="scissor"){
            winner = "Allied"
        }

    }else if(allied==="paper"){

        if(enemy==="rock"){
            winner = "Allied"
        }else if(enemy==="scissor"){
            winner = "Enemy"
        }

    }else if(allied==="scissor"){

        if(enemy==="rock"){
            winner = "Enemy"
        }else if(enemy==="paper"){
            winner = "Allied"
        }

    }

    return winner;

}

function converPathToAttack(hero, pathAttack){

    let typesOfAttack = null;

    if(hero==="Allied") {

        switch(pathAttack){
            case "img/allied/allied-rock.png":
                typesOfAttack = "rock";
                break;
            case "img/allied/allied-paper.png":
                typesOfAttack = "paper";
                break;
            case "img/allied/allied-scissor.png":
                typesOfAttack = "scissor";
                break;
            default:
                typesOfAttack = null;
                break;
        }

    }else{

        switch(pathAttack){
            case "img/enemy/enemy-rock.png":
                typesOfAttack = "rock";
                break;
            case "img/enemy/enemy-paper.png":
                typesOfAttack = "paper";
                break;
            case "img/enemy/enemy-scissor.png":
                typesOfAttack = "scissor";
                break;
            default:
                typesOfAttack = null;
                break;
        }

    }

    return typesOfAttack;

}

function drawResultToLabel(winner){
    winner = winner=="Allied"?"You":winner;
    document.querySelector(".result-field").innerText = winner=="It's a tie!"?winner:winner+" Won!";
}

function drawMovement(winner){
    const alliedField = document.querySelector(".allied-field");
    const enemyField = document.querySelector(".enemy-field");

    if(winner==="Allied"){

        setTimeout(()=>{
            alliedField.classList.add("attack");
        },700)
        
    }else if(winner==="Enemy"){

        setTimeout(()=>{
            enemyField.classList.add("attack");
        },700);

    }
    buttonsClose();
    addHoverEffectAgain();

}

function buttonsClose(){
    // FIGHT BUTTON
    const fightButton = document.querySelector(".fight-button");
    fightButton.disabled = "true";
    fightButton.style.backgroundColor = "rgb(0, 0, 133)";
    fightButton.style.color = "#666";

    document.querySelectorAll(".button").forEach(element=>{
        element.disabled = "true";
        element.style.backgroundColor = "rgb(0, 0, 133)";
        element.style.color = "#666"
    })
}

function resetButtonEffect(winner){

    // RESET BUTTON
    const resetButton = document.querySelector(".reset-button");
    resetButton.disabled = "true";
    resetButton.style.backgroundColor = "rgb(0, 0, 133)";
    resetButton.style.color = "#666";

    if(!(winner==="It's a tie!")) {

        setTimeout(()=>{

            resetButton.removeAttribute("disabled")
            resetButton.style.backgroundColor = "blue";
            resetButton.style.color = "#fff";

        },1800);

    }else{

        resetButton.removeAttribute("disabled")
        resetButton.style.backgroundColor = "blue";
        resetButton.style.color = "#fff";

    }

    resetButton.onmouseenter = () => {
        resetButton.style.backgroundColor = "rgb(0, 0, 165)";  
    }
    resetButton.onmouseleave = () => {
        resetButton.style.backgroundColor = "blue";
    }
    resetButton.onmousedown = () => {
        resetButton.style.backgroundColor = "blue";
    }
    resetButton.onmouseup = () => {
        resetButton.style.backgroundColor = "rgb(0, 0, 165)";
    }

}

function reset(){
    // FIGHT BUTTON
    choosed = false;
    const fightButton = document.querySelector(".fight-button");
    fightButton.removeAttribute("disabled")
    fightButton.style.backgroundColor = "blue";
    fightButton.style.color = "#fff";

    document.querySelectorAll(".button").forEach(element=>{
        element.removeAttribute("disabled")
        element.style.backgroundColor = "blue";
        element.style.color = "#fff"
    })
    resetElements();
}

function addHoverEffectAgain() {

    const fightButton = document.querySelector(".fight-button");
    document.querySelectorAll(".button").forEach(element=>{

        element.onmouseenter = () => {
            element.style.backgroundColor = "rgb(0, 0, 165)";
        }

        element.onmouseleave = () => {
            element.style.backgroundColor = "blue";
        }

        element.onmousedown = () => {
            element.style.backgroundColor = "blue";
        }

        element.onmouseup = () => {
            element.style.backgroundColor = "rgb(0, 0, 165)";
        }

    })

    fightButton.onmouseenter = () => {
        fightButton.style.backgroundColor = "rgb(0, 0, 165)";
    }

    fightButton.onmouseleave = () => {
        fightButton.style.backgroundColor = "blue";
    }

    fightButton.onmousedown = () => {
        fightButton.style.backgroundColor = "blue";
    }

    fightButton.onmouseup = () => {
        fightButton.style.backgroundColor = "rgb(0, 0, 165)";
    }

}

function resetElements(){
    const alliedField = document.querySelector(".allied-field");
    const enemyField = document.querySelector(".enemy-field");
    alliedField.style.display = "none";
    enemyField.style.display = "none";
    alliedField.classList.remove("attack");
    enemyField.classList.remove("attack");
    document.querySelector(".result-field").innerText = "Choose Attack";
}

function damageEffect(winner, typesOfAttack){

    const rockDamage = Number(document.querySelector(".rock").getAttribute("value"));
    const paperDamage = Number(document.querySelector(".paper").getAttribute("value"));
    const scissorDamage = Number(document.querySelector(".scissor").getAttribute("value"));

    const alliedHealtBar = document.querySelector(".allied-health");
    const enemyHealth = document.querySelector(".enemy-health");

    let attackUsing = 0;

    switch(typesOfAttack){
        case "rock":
            typesOfAttack = "rock";
            attackUsing = rockDamage;
            break;
        case "paper":
            typesOfAttack = "paper";
            attackUsing = paperDamage;
            break;
        case "scissor":
            typesOfAttack = "scissor";
            attackUsing = scissorDamage;
            break;
        default:
            alert("Wala naman sa allied")
    }

    if(winner==="Allied"){
        enemyHealth.value -= attackUsing;
    }else if(winner==="Enemy"){
        alliedHealtBar.value -= attackUsing;
    }

    if(Number(document.querySelector(".enemy-health").value) <= 200){
        document.querySelector(".enemy-health").classList.add("low");
    }

    drawDamage(winner,attackUsing);
    showWinner(winner);

}

function drawDamage(winner, damageValue){
    
    const alliedDamageField = document.querySelector(".allied-minus-damage");
    const enemyDamageField = document.querySelector(".enemy-minus-damage");

    damageValue = "-"+damageValue;

    if(winner==="Allied"){

        enemyDamageField.innerText = damageValue;
        enemyDamageField.classList.add("show");

    }else if(winner==="Enemy"){

        alliedDamageField.innerText = damageValue;
        alliedDamageField.classList.add("show");

    }

    setTimeout(()=>{
        enemyDamageField.classList.remove("show");
        alliedDamageField.classList.remove("show");
    }, 2500)

}

function showWinner(winner){

    let winnerNme = null;
    let imagePath = null;

    if(winner==="Allied"){
        winnerNme = document.querySelector(".allied-name").innerText;
        imagePath = document.querySelector(".allied-hero").getAttribute("src");
    }else if(winner==="Enemy") {
        winnerNme = document.querySelector(".computer-name").innerText;
        imagePath = document.querySelector(".enemy-hero").getAttribute("src");
    }

    document.querySelectorAll(".hp").forEach(element=>{
        if(Number(element.value) <= 0) return backToFirst(),displayWinner(winnerNme);
    })

    function displayWinner(name){

        console.log('run')
        const popupContainer = document.querySelector(".popup-container");
        popupContainer.classList.add("open");

        document.querySelector(".winner-image").src = imagePath;
        document.querySelector(".popup-name-field").innerText = name;

        document.querySelector(".popup-x-button").addEventListener("click", ()=>{
            popupContainer.classList.remove("open");
        })
    }   


    function backToFirst(){

        document.querySelector(".fight-field-container").classList.remove("start");
        document.querySelector(".choose-hero-text").innerText = "Choose hero"
        document.querySelector(".buttons-container").classList.remove("start");
        document.querySelectorAll(".hp").forEach(element=>{
            element.style.opacity = "0"
            element.value = "600";
        })
        document.querySelector(".enemy-health").classList.remove("low");
        document.querySelector(".fighting-field").style.opacity = "0"
        document.querySelector(".start-button-container").style.display = "flex";
        document.querySelectorAll(".name").forEach(element=>element.style.opacity = "0")
        document.querySelector(".name-field").value = "";
        alliedNextHeroButton.style.display = "block"
        reset()
    }
}

function proMode(value,typesOfAttack, isOn=false) {
    return isOn?value:typesOfAttack;
}
