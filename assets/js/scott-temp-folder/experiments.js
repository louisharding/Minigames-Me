


/**This function returns a list of pairs to be assigned to the grid */
// even/odd is a problem, 1 value left over, not dealt with yet
// this returns an array of randomly ordered values, each a number between 1 and half the number of cells. 
// There are two of each number
const getPairs = function(rows, cols) {
  // initial stuff
  const numOfCells = rows * cols
  let even = true
  let highestNumber = 0
  if (numOfCells % 2 === 0) {
    highestNumber = numOfCells / 2
  } else {
    even = false
    highestNumber = (numOfCells - 1) / 2
  }

  // create empty array
  let pairsArray = []
  while (pairsArray.length < numOfCells) {
    pairsArray.push(null)
  }

  /**Function for random array index */
  const randomArrayIndex = function() {
    Math.floor(Math.random() * highestNumber)
  }

  // this chunk of code goes through each number that is to be saved as a pair
  // and chooses a random empty array index to save it to, resulting in a random list of the desired numbers
  for (let step = 1; step < highestNumber; step++) {   //go through the values to be saved
    let valuesSaved = 0
    while (valuesSaved != 2) {     //each value saved twice
      const arrayTarget = randomArrayIndex    
      if (pairsArray[arrayTarget] = null) {   //is that address empty?
        pairsArray[arrayTarget] = step
        valuesSaved++
      }
    }
  }

  return randomArrayIndex


    // Math.floor(Math.random() * highestNumber) //saving this for now
  

}






/**this function creates the grid */ 
const createGrid = function(rows, cols) {
  const pairsArray = getPairs(rows,cols)
  // console.log(pairsArray)  // doesn't work yet
  const container = document.getElementById('grid-container');
  container.innerHTML = "";
  getPairs(rows, cols)

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
    cell.textContent = i + 1; // optional: cell number
    cell.id = i + 1;
    container.appendChild(cell);
  }
}