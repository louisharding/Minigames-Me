let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("choice-rock");
const paper_div = document.getElementById("choice-paper");
const scissors_div = document.getElementById("choice-scissors");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `Your ${userChoice} beats AI's ${computerChoice}. You win!`;
  document
    .getElementById("choice-" + userChoice.toLowerCase())
    .classList.add("green-glow");
  setTimeout(function () {
    document
      .getElementById("choice-" + userChoice.toLowerCase())
      .classList.remove("green-glow");
  }, 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `AI's ${computerChoice} beats your ${userChoice}. You lose!`;
  document
    .getElementById("choice-" + userChoice.toLowerCase())
    .classList.add("red-glow");
  setTimeout(function () {
    document
      .getElementById("choice-" + userChoice.toLowerCase())
      .classList.remove("red-glow");
  }, 300);
}

function draw(userChoice) {
  result_p.innerHTML = `Both you and AI chose ${userChoice}. It's a draw!`;
  document
    .getElementById("choice-" + userChoice.toLowerCase())
    .classList.add("orange-glow");
  setTimeout(function () {
    document
      .getElementById("choice-" + userChoice.toLowerCase())
      .classList.remove("orange-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("Rock");
  });

  paper_div.addEventListener("click", function () {
    game("Paper");
  });

  scissors_div.addEventListener("click", function () {
    game("Scissors");
  });
}

main();
