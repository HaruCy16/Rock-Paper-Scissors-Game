//Variables for results and moves
let wins = 0;
let losses = 0;
let ties = 0;
const moves = ["rock", "paper", "scissors"];

//Function to play the game
function playGame(playerMove) {
  const computerMove = getComputerMove();
  determineOutcome(playerMove, computerMove);
  showResult(playerMove, computerMove);
}

//Computer move
function getComputerMove() {
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

//Outcomes
function determineOutcome(playerMove, computerMove) {
  if (playerMove === computerMove) {
    ties++;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    wins++;
  } else {
    losses++;
  }
}

//Display result
function showResult(playerMove, computerMove) {
  alert(
    `You chose ${playerMove}. The computer chose ${computerMove}. \nWins: ${wins}, Losses: ${losses}, Ties: ${ties}`
  );
}

//Reset game
document.getElementById("resetBtn").addEventListener("click", resetGame);

function resetGame() {
  wins = 0;
  losses = 0;
  ties = 0;
  alert("Game reset! Wins, Losses, and Ties have all been reset to 0.");
}

//show game status
document.getElementById("gameInfo").addEventListener("click", showInfo);

function showInfo() {
  alert(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
}
