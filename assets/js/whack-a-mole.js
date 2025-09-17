// Const values
const gridSize = 9;


// Let
let score = 0;
let moveMoleInterval = 2; // seconds = 2000 milliseconds
let gameDuration = 30; // seconds = 30000 milliseconds
// let previousTile; // make sure that the mole always moves to a new tile

// Selectors
const startBtn = document.getElementById("start-btn");
let scoreText = document.getElementById("score-text");
let timeLeftText = document.getElementById("time-left");
const gridTiles = document.querySelectorAll(".tile");


// Event Listeners
startBtn.addEventListener('click', startGame);

// Functions
function startGame() {
    score = 0;
    console.log("Game Started");
    // startTimer();
    moveMole();
    
}


function startTimer () {
    timeLeftText.innerText = gameDuration.toString();
}


function moveMole() {   
    let moleTimer = null;

    let moleInterval = convertToMilliseconds(moveMoleInterval);

    // console.log(moleInterval);

    moleTimer = setInterval(getRandomTile, moleInterval);    
}

// function removeMole(tile) {
//     tile.classList.remove('mole');
// }

// Loop through grids with class "tile", 
// pick a random tile for the mole css class to be added
function getRandomTile() {
    console.log("moving mole");

    const chosenTile = getRandomNumber(gridSize);

    // Remove any existing mole class in tiles
    for (const tile of gridTiles) {
        tile.classList.remove('mole');
    }
    gridTiles[chosenTile].classList.add('mole');


    // for (let i = 0; i < gridSize; i++)
    // {
    //     if(i === chosenTile)
    //     {
    //         gridTiles[i].classList.add('mole');
    //         break;
    //     }

    // }

}

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function convertToMilliseconds(seconds) {
    return seconds * 1000;
}

// function convertToSeconds(milliseconds) {
//     return milliseconds / 1000;
// }
