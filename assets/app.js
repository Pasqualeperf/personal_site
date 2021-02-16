"use strict";

const portrait = document.querySelector("#portrait");

function changePortrait(image) {
    image.addEventListener('mouseover', () => portrait.src = "./assets/img/me_portrait_mask.jpg" );

    image.addEventListener('mouseout', () => portrait.src = "./assets/img/me_portrait.jpg" );
}

changePortrait(portrait);

function doMagicWithColors(obj, textMessage) {
    
    const titles = document.querySelectorAll(".title");
    const text = document.querySelectorAll(".text");
    const svg = document.querySelectorAll(".path");
    const colorWin = document.querySelector("#colorWin");
    if (obj) {
        document.body.style.backgroundColor = obj.getOriginalInput();
        if (obj.isLight()) {
            titles.forEach(element => {
                element.style.color = "#1A1A1A";
            });
            text.forEach(element => {
                element.style.color = "#1A1A1A";
            });
            svg.forEach(element => {
                element.style.fill = "#1A1A1A";
            });
        } else {
            titles.forEach(element => {
                element.style.color = "#FFFFFF";
            });
            text.forEach(element => {
                element.style.color = "#FFFFFF";
            });
            svg.forEach(element => {
                element.style.fill = "#FFFFFF";
            });
        }

        if (textMessage) {
            colorWin.appendChild(textMessage);
        } else {
            colorWin.innerHTML = "";
        }
    }
}


function bodySwitchColor(color) {
    let bodyColor = "";
    let rewards;
    switch (color) {
        case "nero":
        case "black":
            bodyColor = "#000";
            break;
        case "bianco":
        case "white":    
            bodyColor = "#FFF";
            break;
        case "grigio":
        case "grey":    
            bodyColor = "#BAB8BB";
            break;
        case "rosso":
        case "red":    
            bodyColor = "#D90429";
            rewards = document.createElement("h5");
            rewards.innerHTML = "Grande! Rosso è anche il mio preferito hai vinto un attacco DDoS gratis";
            break;
        case "arancione":
        case "arancio":
        case "orange":        
            bodyColor = "#FB8500";
            break;
        case "rosa":
        case "pink":    
            bodyColor = "#E899DC";
            break;
        case "verde":
        case "green":    
            bodyColor = "#43B929";
            break;
        case "giallo":
        case "yellow":    
            bodyColor = "#FFFF3F";
            break;
        case "blu":
        case "blue":
            bodyColor = "#03045E";
            break;
        case "viola":
        case "violet":
        case "purple":
            bodyColor = "#7209B7";
            break;
        case "celeste":
        case "heavenly":
            bodyColor = "#0077b6";
            break;
        case "marrone":
        case "brown":    
            bodyColor = "#774936";
            break;
        default:
            alert("Dai lo so che stai scherzando! Inserisci un colore comune.")
            break;
    }

    let result = new tinycolor(bodyColor);

    if (rewards) {    
        doMagicWithColors(result, rewards);
    } else {
        doMagicWithColors(result);
    }
    

}

const colorButton = document.querySelector("#colorButton");

function colorChanger(button) {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let color = document.querySelector("#theColor").value.toLowerCase();
        bodySwitchColor(color);
    })
}

colorChanger(colorButton);