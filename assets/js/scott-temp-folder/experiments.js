


/**This function returns a list of pairs to be assigned to the grid */
// even/odd is a problem, 1 value left over, not dealt with yet
// this returns an array of randomly ordered values, each a number between 1 and half the number of cells. 
// There are two of each number
let pairsArray = []  // this should be removed after debugging
const getPairs = function(rows, cols) {
  // initial stuff
  //CHUNK ONE:
  console.log("function getPairs begins, parameters: " , rows , cols)
  const numOfCells = rows * cols
  let even = true
  let highestNumber = 0
  if (numOfCells % 2 === 0) {
    highestNumber = numOfCells / 2
  } else {
    even = false
    highestNumber = (numOfCells - 1) / 2
  }
  console.log("chunk one ends")


  //CHUNK TWO:
//   create empty array
//   let pairsArray = []  // this is commented out for debugging
  while (pairsArray.length < numOfCells) {
    pairsArray.push(null)
  }
  console.log("chunk two ends")
  console.log(pairsArray)

  //CHUNK THREE:
  /**Function for random array index */
  const randomArrayIndex = function() {
    return Math.floor(Math.random() * highestNumber)
  }
console.log("chunk three ends")
console.log("a random number:" , randomArrayIndex())

  //CHUNK FOUR:
  // this chunk of code goes through each number that is to be saved as a pair
  // and chooses a random empty array index to save it to, resulting in a random list of the desired numbers
  for (let step = 1; step < highestNumber; step++) {   //go through the values to be saved
    let valuesSaved = 0
    while (valuesSaved != 2) {     //each value saved twice
        const arrayTarget = randomArrayIndex()
        console.log("array target: " , arrayTarget)
        console.log("pairs array index array target" , pairsArray[arrayTarget])
      if (pairsArray[arrayTarget] === null) {   //is that address empty?
        console.log("array target is null, pairs array index array target:" , pairsArray[arrayTarget])
        console.log(step)
        pairsArray[arrayTarget] = step
        console.log("pairs array, array target" , pairsArray[arrayTarget])
        valuesSaved++
        console.log(valuesSaved++)
     }
    //  break
    }
    // break
  }
  console.log("chunk four ends")

  //CHUNK FIVE:
//   return randomArrayIndex



    //saving this for now:
    // Math.floor(Math.random() * highestNumber) 
  

}

console.log("code run begins")
const myArray = getPairs(2,4)
// console.log(myArray)

