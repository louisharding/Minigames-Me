// Const values
const gridSize = 9;

// Let
let score = 0;
let moveMoleInterval = 1.2; // seconds = 2000 milliseconds
let gameDuration = 30; // seconds = 30000 milliseconds
// let previousTile; // make sure that the mole always moves to a new tile
let isGameActive = false;

let timerLeftInterval = null;
let moleInterval = null;

// Selectors
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const retryBtn = document.getElementById("retry-btn");
let scoreText = document.getElementById("score-text");
let timeLeftText = document.getElementById("time-left");
const gridTiles = document.querySelectorAll(".wam-tile");
let gameOverMessageText = document.getElementById("game-over-message")

// Event Listeners
startBtn.addEventListener('click', startGame);
// pauseBtn.addEventListener('click', pauseGame);
retryBtn.addEventListener('click', retryGame);

for (const tile of gridTiles) {
    tile.addEventListener("click", checkForMole);
}

// Functions
function startGame() {
    score = 0;
    isGameActive = true;
    console.log("Game Started");
    startBtn.disabled = true;
    //add mole imediately
    // getRandomTile();
    startTimer(gameDuration, timeLeftText);
    moveMole();    
}

function startTimer (seconds, displayElement) {
    retryBtn.disabled = false;

    let counter = seconds;

    timerLeftInterval = setInterval(() => {
        counter--;
        displayElement.innerText = counter.toString();

        if(counter <= 0)
        {
            isGameActive = false;
            clearInterval(timerLeftInterval);
            clearInterval(moleInterval);

            // gameOverMessageText.innerText = `Times up! Your scored: ${score}!`;
            gameOverMessageText.innerText = `Times up! You whacked the mole ${score} times!`;

            retryBtn.disabled = false;
        }
    }, 1000); // milliseconds = 1 second    
}

// function pauseGame()
// {
//     if(timerLeftInterval !== null && moleInterval !== null)
//     {
//         timerLeftInterval.ste();
//     }
// }

function retryGame()
{
    clearInterval(timerLeftInterval);   
    clearInterval(moleInterval);

    timerLeftInterval = null;
    moleInterval = null;

    retryBtn.disabled = true;
    startBtn.disabled = false;

    gameOverMessageText.innerText = "";

    for (const tile of gridTiles) {
        tile.classList.remove('mole');
    }

    score = 0;
    scoreText.innerText = "0";

    timeLeftText.innerText = "0";

    console.log("click");


}

function moveMole() {
    if(isGameActive)
    {
        moleInterval = setInterval(getRandomTile, convertToMilliseconds(moveMoleInterval));
    }
}

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
}

// Not using buttons, so will check for mouse click on elements
function checkForMole(event) {
    if (isGameActive) {
        // Check for mole class
        if (event.target.classList.contains('mole')) 
        {
            console.log("clicked on mole!");        
            removeMole(event.target);

            score += 1;
            scoreText.innerText = score.toString();
        }
    }   
}

function removeMole(tile) {
    tile.classList.remove('mole');
}

// Helper functions
function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function convertToMilliseconds(seconds) {
    return seconds * 1000;
}
