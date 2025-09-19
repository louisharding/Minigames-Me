// Variables
const gridSize = 9;
let score = 0;
let moveMoleInterval = 1.2; // seconds = 1200 milliseconds
let gameDuration = 30; // seconds = 30000 milliseconds
let isGameActive = false;
let timerLeftInterval = null;
let moleInterval = null;

// Selectors
const startBtn = document.getElementById("start-btn");
const retryBtn = document.getElementById("retry-btn");
const gridTiles = document.querySelectorAll(".game-tile");
let scoreText = document.getElementById("score-text");
let timeLeftText = document.getElementById("time-left");
let gameOverMessageText = document.getElementById("game-over-message");

// Event Listeners
startBtn.addEventListener('click', startGame);
retryBtn.addEventListener('click', retryGame);
for (const tile of gridTiles) {
    tile.addEventListener("click", checkForMole);
}

// Functions
function startGame() {
    // Reset values
    score = 0;

    isGameActive = true;

    startBtn.disabled = true;

    startTimer(gameDuration, timeLeftText);
    moveMole();    
}

function startTimer (seconds, displayElement) {
    let counter = seconds;    

    // Enable the retry button
    retryBtn.disabled = false;

    // Set the initial time left
    timerLeftInterval = setInterval(() => {
        counter--;
        displayElement.innerText = counter.toString();

        if(counter <= 0)
        {
            isGameActive = false;

            // Stop the intervals
            clearInterval(timerLeftInterval);
            clearInterval(moleInterval);

            gameOverMessageText.innerText = `Times up! You whacked the mole ${score} times!`;

        }
    }, 1000); // milliseconds = 1 second    
}


/**
 * Resets the Whack-a-Mole game to its initial state.
 * - Clears active intervals for timer and mole appearance.
 * - Resets button states (disables retry, enables start).
 * - Clears game over message and resets score and timer displays.
 * - Removes any mole indicators from the grid tiles.
 */
function retryGame()
{
    // Clear any existing intervals
    clearInterval(timerLeftInterval);   
    clearInterval(moleInterval);
    timerLeftInterval = null;
    moleInterval = null;

    // Reset buttons
    retryBtn.disabled = true;
    startBtn.disabled = false;

    // Reset game stats
    gameOverMessageText.innerText = "";    
    score = 0;
    scoreText.innerText = "0";
    timeLeftText.innerText = "0";

    // Remove any existing mole class in tiles
    for (const tile of gridTiles) {
        tile.classList.remove('mole');
    }
}

// Set an interval to move the mole every x seconds
function moveMole() {
    // Make sure the game is active before moving the mole
    if (isGameActive) {
        moleInterval = setInterval(getRandomTile, convertToMilliseconds(moveMoleInterval));
    }
}

// Loop through grids with class "tile", 
// pick a random tile for the mole css class to be added
function getRandomTile() {
    const chosenTile = getRandomNumber(gridSize);

    // Remove any existing mole class in tiles
    for (const tile of gridTiles) {
        tile.classList.remove('mole');
    }
    gridTiles[chosenTile].classList.add('mole');
}

// Grid is not made of buttons,
// so we check for mouse clicks on the elements
function checkForMole(event) {
    if (isGameActive) {
        // Check for mole class
        if (event.target.classList.contains('mole')) 
        {     
            removeMole(event.target);

            // Increment score
            score += 1;
            scoreText.innerText = score.toString();
        }
    }   
}

function removeMole(tile) {
    tile.classList.remove('mole');
}

// Helper functions
// Returns a random number
function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

// Converts seconds to milliseconds - for timer intervals
function convertToMilliseconds(seconds) {
    return seconds * 1000;
}
