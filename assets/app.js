"use strict";

const portrait = document.querySelector("#portrait");

function changePortrait(image) {
    image.addEventListener('mouseover', () => portrait.src = "./assets/img/me_portrait_mask.jpg" );

    image.addEventListener('mouseout', () => portrait.src = "./assets/img/me_portrait.jpg" );
}

changePortrait(portrait);