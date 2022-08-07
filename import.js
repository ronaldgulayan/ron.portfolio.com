
export class CreateLowerContainer {

    constructor(id, backgroundColor,minHeight="0px"){
        this.mainContainer = document.getElementById(id);
        this.mainContainer.style.width = "100%";
        this.mainContainer.style.padding = "20px 0px";
        this.mainContainer.style.display = "flex";
        this.mainContainer.style.minHeight=minHeight;
        this.mainContainer.style.flexDirection = "column";
        this.mainContainer.style.alignItems = "center";
        this.mainContainer.style.backgroundColor = backgroundColor;
    }
    
    addText(Class,text="none", fontSize="20px", fontColor="black", 
        fontFamily="sans-serif", backgroundColor="none", 
        textShadow="none"){
        const element = document.createElement("p");
        element.classList.add(Class)
        element.style.fontStyle = "italic";
        element.innerText = text;
        element.style.color = fontColor;
        element.style.fontSize = fontSize;
        element.style.fontFamily = fontFamily;
        element.style.backgroundColor = backgroundColor;
        element.style.textShadow = textShadow;
        this.mainContainer.append(element)
    }

    static addStyle(ClassOrId){
        return document.querySelector(ClassOrId).style;
    }

    CreateButtons(){

        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        container.style.padding = "5px 10px";
        container.style.marginTop = "20px";
        container.style.columnGap = "10px";

        for(let i=0;i<2;i++){

            const image = document.createElement("img");
            image.src = `buttons\\img-${i+1}.png`
            image.classList.add("buttons-image")
            image.style.width = "30px";
            image.style.cursor = "pointer";
            container.append(image)

        }

        this.mainContainer.append(container)

    }

    static addButtonsEvent(){
        
        const buttonsLink = ["https://www.facebook.com/ronald.gulayan/",
            "https://github.com/ronaldgulayan"];
        let myarrays = [];

        document.querySelectorAll(".buttons-image").forEach((element, index, arrays)=>{
            element.onmouseenter  = () => {
                element.style.backgroundColor = "#bbb"
            }
            element.onmouseleave  = () => {
                element.style.backgroundColor = "#fff"
            }
            myarrays = arrays;

        })

        myarrays[0].addEventListener("click", ()=>{
            window.location.href = buttonsLink[0];
        })

        myarrays[1].addEventListener("click", ()=>{
            window.location.href = buttonsLink[1];
        })

    }

}

// FOR PROJECT HTML ONLY

export class CreateProject {
    constructor(classOrId, linked="#", backgroundColor="#999", imagePath="", language=[], title="Title", context="Context"){
        const real = document.querySelector(classOrId)

        const mainContainer = document.createElement("div")
        mainContainer.style.width = "300px";
        mainContainer.style.minHeight = "10px";
        mainContainer.style.padding = "20px";
        mainContainer.style.borderRadius = "30px";
        mainContainer.style.backgroundColor = backgroundColor;
        mainContainer.style.display = "flex";
        mainContainer.style.flexDirection = "column";
        mainContainer.style.justifyContent = "center";
        mainContainer.style.position = "relative";
        mainContainer.style.boxShadow = "1px 2px 5px rgb(0,0,0)"
        mainContainer.style.overflow = "hidden";
        
        const imageContainer = document.createElement("div");
        imageContainer.style.width = "100%";
        imageContainer.style.height = "200px";
        imageContainer.style.display = "flex";
        imageContainer.style.alignItems = "center";
        imageContainer.style.justifyContent = "center"
        imageContainer.style.borderRadius = "20px";
        imageContainer.style.backgroundColor = "#000";
        imageContainer.style.overflow = "hidden";

        const image = document.createElement("img");
        image.src = imagePath;
        image.style.height = "100%";
        imageContainer.append(image);
        mainContainer.append(imageContainer)

        const progLanguges = document.createElement("p");

        let languageText = "";

        language.forEach((element, index, array)=>{
            array[index] = element.toLowerCase();
            array[index] = element[0].toUpperCase() + array[index].substring(1);
        })

        if(language.length == 0){
            languageText = "Programming Language";
        }else{
            for(let i=0;i<language.length;i++){

                if(i==language.length-1){
                    languageText+=language[i]+".";
                }else{
                    languageText+=language[i]+", ";
                }

                
            }
        }

        progLanguges.innerText = languageText;
        progLanguges.style.color = "blue";
        progLanguges.style.fontSize = "15px";
        progLanguges.style.marginTop = "12px";
        progLanguges.style.fontFamily = "sans-serif";
        progLanguges.style.fontStyle = "italic";
        mainContainer.append(progLanguges)

        const Title = document.createElement("p");
        Title.innerText = title;
        Title.style.color = "black";
        Title.style.fontSize = "20px";
        Title.style.fontWeight = "bold";
        mainContainer.append(Title)

        const Context = document.createElement("p");
        Context.innerText = context;
        Context.style.fontSize = "15px";
        Context.style.color = "#333";
        Context.style.marginTop = "20px"
        mainContainer.append(Context)

        const separator = document.createElement("div");
        separator.style.width = "100%";
        separator.style.height = "1px";
        separator.style.backgroundColor = "#777";
        separator.style.marginTop = "10px"
        mainContainer.append(separator)

        const button = document.createElement("button");
        button.innerText = "View Project";
        button.style.borderRadius = "30px";
        button.style.padding = "7px 0px"
        button.style.width = "130px"
        button.style.backgroundColor = "black";
        button.style.color = "white"
        button.style.marginTop = "10px"
        button.style.cursor = "pointer";
        button.style.border = "none"
        
        button.onmouseenter = () => {
            button.style.backgroundColor = "rgb(0,0,0,.8)"
        }

        button.onmouseleave = () => {
            button.style.backgroundColor = "rgb(0,0,0)"
        }

        button.onmousedown = () => {
            window.location.href = linked;
            button.style.backgroundColor = "rgb(0,0,0,.5)"
        }

        button.onmouseup = () => {
            button.style.backgroundColor = "rgb(0,0,0,.8)"
        }

        mainContainer.append(button)

        real.append(mainContainer)

    }
}

//  VIDEO MENU

export class CreateVideoProject {

    popupVideoContainer = document.querySelector(".popup-video");

    constructor(classOrId, videoPath="#", backgroundColor="#999", imagePath="", language=[], title="Title", context="Context"){
        const real = document.querySelector(classOrId)

        const mainContainer = document.createElement("div")
        mainContainer.style.width = "300px";
        mainContainer.style.minHeight = "10px";
        mainContainer.style.padding = "20px";
        mainContainer.style.borderRadius = "30px";
        mainContainer.style.backgroundColor = backgroundColor;
        mainContainer.style.display = "flex";
        mainContainer.style.flexDirection = "column";
        mainContainer.style.justifyContent = "center";
        mainContainer.style.position = "relative";
        mainContainer.style.boxShadow = "1px 2px 5px rgb(0,0,0)"
        mainContainer.style.overflow = "hidden";
        
        const imageContainer = document.createElement("div");
        imageContainer.style.position = "relative";
        imageContainer.style.width = "100%";
        imageContainer.style.height = "200px";
        imageContainer.style.display = "flex";
        imageContainer.style.alignItems = "center";
        imageContainer.style.justifyContent = "center"
        imageContainer.style.borderRadius = "20px";
        imageContainer.style.backgroundColor = "#000";
        imageContainer.style.overflow = "hidden";

        const playIconContainer = document.createElement("div");
        playIconContainer.style.display = "flex";
        playIconContainer.style.justifyContent = "center";
        playIconContainer.style.alignItems = "center";
        playIconContainer.style.position = "absolute";
        playIconContainer.style.backgroundColor = "rgb(0,0,0,.6)"
        playIconContainer.style.width = "100%"
        playIconContainer.style.height = "100%"
        imageContainer.append(playIconContainer)

        const playIcon = document.createElement("img");
        playIcon.src = "img/play-icon.png";
        playIcon.style.width = "50px";
        playIcon.style.cursor = "pointer";
        playIcon.addEventListener("click", ()=>{

            // ICON BUTTON
            const vid = document.createElement("video");
            vid.src = videoPath;
            vid.controls = "true";
            vid.id = "0033444fOx";
            this.popupVideoContainer.append(vid);

            document.querySelector(".popup-container").classList.add("open")
            document.body.style.overflow = "hidden";

        })
        playIconContainer.append(playIcon)

        const image = document.createElement("img");
        image.src = imagePath;
        image.style.height = "100%";
        imageContainer.append(image);
        mainContainer.append(imageContainer)

        const progLanguges = document.createElement("p");

        let languageText = "";

        language.forEach((element, index, array)=>{
            array[index] = element.toLowerCase();
            array[index] = element[0].toUpperCase() + array[index].substring(1);
        })

        if(language.length == 0){
            languageText = "Programming Language";
        }else{
            for(let i=0;i<language.length;i++){

                if(i==language.length-1){
                    languageText+=language[i]+".";
                }else{
                    languageText+=language[i]+", ";
                }

                
            }
        }

        progLanguges.innerText = languageText;
        progLanguges.style.color = "blue";
        progLanguges.style.fontSize = "15px";
        progLanguges.style.marginTop = "12px";
        progLanguges.style.fontFamily = "sans-serif";
        progLanguges.style.fontStyle = "italic";
        mainContainer.append(progLanguges)

        const Title = document.createElement("p");
        Title.innerText = title;
        Title.style.color = "black";
        Title.style.fontSize = "20px";
        Title.style.fontWeight = "bold";
        mainContainer.append(Title)

        const Context = document.createElement("p");
        Context.innerText = context;
        Context.style.fontSize = "15px";
        Context.style.color = "#333";
        Context.style.marginTop = "20px"
        mainContainer.append(Context)

        const separator = document.createElement("div");
        separator.style.width = "100%";
        separator.style.height = "1px";
        separator.style.backgroundColor = "#777";
        separator.style.marginTop = "10px"
        mainContainer.append(separator)

        const button = document.createElement("button");
        button.innerText = "View Video";
        button.style.borderRadius = "30px";
        button.style.padding = "7px 0px"
        button.style.width = "130px"
        button.style.backgroundColor = "red";
        button.style.color = "white"
        button.style.marginTop = "10px"
        button.style.cursor = "pointer";
        button.style.border = "none"
        
        button.onmouseenter = () => {
            button.style.backgroundColor = "rgb(255,0,0,.8)"
        }

        button.onmouseleave = () => {
            button.style.backgroundColor = "rgb(255,0,0)"
        }

        button.onmousedown = () => {

            const vid = document.createElement("video");
            vid.src = videoPath;
            vid.controls = "true";
            vid.id = "0033444fOx";
            this.popupVideoContainer.append(vid);

            document.querySelector(".popup-container").classList.add("open")
            document.body.style.overflow = "hidden";

            button.style.backgroundColor = "rgb(255,0,0,.5)"
        }

        button.onmouseup = () => {
            button.style.backgroundColor = "rgb(255,0,0,.8)"
        }

        mainContainer.append(button)

        real.append(mainContainer)

        document.querySelector(".exit-button").addEventListener("click", ()=> {

            document.querySelector(".popup-container").classList.remove("open")
            document.body.style.overflow = "auto";
            
            const child = document.getElementById("0033444fOx");
            this.popupVideoContainer.removeChild(child);

        })

        

    }
}

