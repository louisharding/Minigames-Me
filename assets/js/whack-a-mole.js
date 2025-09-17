// Const values
const gridSize = 9;


// Let
let score = 0;
let moveMoleInterval = 2000; // milliseconds = 2 seconds
let gameDuration = 30000; // milliseconds = 30 seconds

// Selectors
const startBtn = document.getElementById("start-btn");
let scoreText = document.getElementById("score-text");


function getRandomTile() {
    return Math.floor(Math.random() * gridSize);
}



// function placeMole() { 

// }