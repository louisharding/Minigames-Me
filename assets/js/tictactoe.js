const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetBtn = document.getElementById('reset');

// Set up initial game state
let board = Array(9).fill('');
let currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
let gameActive = true;

// Winning combinations
const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

statusText.textContent = `Player ${currentPlayer}'s turn`;

function handleClick(e) {
  const index = e.target.dataset.index;

  // Ignore if game is over or cell is already filled
  if (!gameActive || board[index] !== '') return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  // Check for win
  if (checkWin(currentPlayer)) {
    statusText.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  // Check for draw
  if (board.every(cell => cell !== '')) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  // Switch turns
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin(player) {
  return winPatterns.some(pattern =>
    pattern.every(index => board[index] === player)
  );
}

function resetGame() {
  board = Array(9).fill('');
  currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
  gameActive = true;
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = '');
}

// Set up event listeners
cells.forEach(cell => cell.addEventListener('click', handleClick));
resetBtn.addEventListener('click', resetGame);
