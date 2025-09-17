// Const values
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const maxHex = 6;

// Selectors
const colourBtn = document.getElementById("colour-btn");
const colourText = document.getElementById("colour-text");

// Event Listeners
colourBtn.addEventListener('click', changeColour)

function changeColour() {
    let hexColour = "#";

    for (let i = 0; i < maxHex; i++) { 
        let randomHexValue = getRandomNumber();
        hexColour += hexValues[randomHexValue];
    }
    
    colourText.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hexValues.length);
}

// Credits
// Used tutorial from freeCodeCamp.org to help with understanding
// https://www.youtube.com/watch?v=3PHXvlpOkf4&t=421s&ab_channel=freeCodeCamp.org