console.log("start of script")

/**this function creates the grid */ 
const createGrid = function(rows, cols) {
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
    cell.style.border = '1px solid #ccc';
    cell.style.background = '#f9f9f9';
    //these two lines saved before changing, just in case
    // cell.textContent = i + 1; // optional: cell number
    // cell.id = i + 1;
    cell.textContent = pairsArray[i]; 
    cell.id = i + 1;
    container.appendChild(cell);
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

console.log(createPairsArray(4,4))