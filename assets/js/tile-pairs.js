console.log("start of script")

/**this function creates the grid */ 
const createGrid = function(rows, cols) {
  tilesMatched = 0
  const pairsArray = createPairsArray(rows,cols)
  const container = document.getElementById('grid-container');
  container.innerHTML = "";
  // getPairs(rows, cols)

  // Apply CSS grid styles
  container.style.display = 'grid';
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  container.style.gap = '5px'; // optional

  // Create grid cells
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('data-value' , `${pairsArray[i]}`) //this currently causes a bug further down to be fixed
    cell.textContent = "???"; 
    cell.id = i + 1;
    cell.addEventListener("click", tileClicked)
    container.appendChild(cell);
    cell.classList.add("game-tile")
  }
}

/**This function returns an array of the right number of pairs of numbers */
const createPairsArray = function(rows, cols) {

  // initial stuff
  const numOfCells = rows * cols
  let highestNumber = 0
  if (numOfCells % 2 === 0) {
    highestNumber = numOfCells / 2
  } else {
    highestNumber = (numOfCells - 1) / 2
  }
//   create unsorted pairs array
  let pairsArray = []  
for (let i = 1; i <= highestNumber; i++) {
  pairsArray.push(i)
  pairsArray.push(i)
}

  //this function shuffles the array
  function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}  
return shuffle(pairsArray)
}

console.log(createPairsArray(8,8))

let firstTileClicked = null
let secondTileClicked = null

const tileTick = function(tile) {
  tile.textContent = tile.textContent + "✓"
}

const tileQuestionMarks = function(tile) {
  if (tile.textContent.includes("✓") === false) {
  tile.textContent = "???"}
}

/**This function deals with clicks on tiles (aka cells) */
let tileClicked = function(e) {

  if (firstTileClicked != null && secondTileClicked != null) {
    if (firstTileClicked.textContent != "✓" && secondTileClicked.textContent != "✓") {
    tileQuestionMarks(firstTileClicked)
      // firstTileClicked.textContent = "???"
    firstTileClicked = null
    tileQuestionMarks(secondTileClicked)
    // secondTileClicked.textContent = "???"
    secondTileClicked = null
    console.log("reset")
    }
  }

    
  if (firstTileClicked === null) {
    e.target.textContent = e.target.dataset.value   
    firstTileClicked = e.target
    console.log("one clicked, first tile:" , firstTileClicked)
  } else if (secondTileClicked === null) {
    e.target.textContent = e.target.dataset.value 
    secondTileClicked = e.target
    console.log("two clicked, second tile:" , secondTileClicked)
  }

  if (firstTileClicked != null && secondTileClicked != null) {
    console.log("both clicked")
    
    let symbolsMatch = false
    

    // matching symbols ✓  :
    if (firstTileClicked.textContent === secondTileClicked.textContent) {
      symbolsMatch = true
      tileTick(firstTileClicked)
      // firstTileClicked.textContent = firstTileClicked.textContent + "✓"
      tileTick(secondTileClicked)
      tilesMatched = tilesMatched + 2
      if (tilesMatched == textInput1.value * textInput1.value ){
        alert("Winner Winner Chicken Dinner!!!!")

      }
    } 

    }
  }

  let tilesMatched = 0

createGrid(textInput1.value, textInput2.value)