//beginning of game after reload. reset player score variables

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 1;

// set scores on page to zeroes and reset rounds
let humanHtml = document.querySelector(".human-score");
let computerHtml = document.querySelector(".cpu-score");
let rounds = document.querySelector(".rounds")
humanHtml.textContent = humanScore;
computerHtml.textContent = computerScore;
rounds.textContent = `Round ${roundsPlayed}`;

// adding the reset button to a variable for later
let resetButton = document.querySelector("#reset-button");
resetButton.style.display = "none";

let gameLog = document.querySelector(".game-log-text");
gameLog.textContent = "Pick your weapon!";
playGame();

// Modify the checkGameOver function to check for 5 wins
function checkGameOver() {
  if (humanScore >= 5 || computerScore >= 5) {
      // Game is over when either player reaches 5 wins
      let resultMessage = "";
      
      if (humanScore >= 5 && computerScore >= 5) {
          resultMessage = `Game over! It's a tie! Final score: You ${humanScore}, Computer ${computerScore}`;
      } else if (humanScore >= 5) {
          resultMessage = `Game over! You win! Final score: You ${humanScore}, Computer ${computerScore}`;
      } else if (computerScore >= 5) {
          resultMessage = `Game over! You lose! Final score: You ${humanScore}, Computer ${computerScore}`;
      }
      
      // Display game over message
      gameLog.textContent = `\n${resultMessage}`;
      
      // Show the reset button
      resetButton.style.display = "block";
      
      // Disable the game buttons
      document.querySelector("#rock").disabled = true;
      document.querySelector("#paper").disabled = true;
      document.querySelector("#scissors").disabled = true;
      
      return true; // Game is over
  }
  
  return false; // Game continues
}

resetButton.addEventListener('click', resetGame);


function getComputerChoice() {
  let computerChoice;
  //generate random number between 0 and 100
  let result = Math.floor(Math.random() * 100);

  //pick rock, paper or scissors based on number generated
  if (result > 0 && result <= 33) {
    computerChoice = "rock";
    gameLog.textContent += `The computer picks ${computerChoice}`;
    return computerChoice;
  } else if (result > 33 && result <= 67) {
    computerChoice = "scissors";
    gameLog.textContent += `The computer picks ${computerChoice}`;
    return computerChoice;
  } else {
    computerChoice = "paper";
    gameLog.textContent += `The computer picks ${computerChoice}`;
    return computerChoice;
  }
}

function updateRounds () {
    roundsPlayed++;
    rounds.textContent = `Round ${roundsPlayed}`;
  
}

function resetGame() {
  //reset all scores and display element when reset button is pressed
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 1;
  humanHtml.textContent = humanScore;
  computerHtml.textContent = computerScore;
  rounds.textContent = `Round ${roundsPlayed}`;
  gameLog.textContent = "Game reset! Make your choice...";

  // Hide the reset button
  resetButton.style.display = "none";
    
  // Re-enable the game buttons
  document.querySelector("#rock").disabled = false;
  document.querySelector("#paper").disabled = false;
  document.querySelector("#scissors").disabled = false;
}

// main game logic
function handleChoice(humanChoice) {
  // Only proceed if the game is not over
  if (humanScore < 5 && computerScore < 5) {
      // Clear previous game log and show player's choice
      gameLog.textContent = `You picked ${humanChoice}. `;
      
      // Get computer's choice and play the round after a small delay
      setTimeout(() => {
          // Get computer choice
          const computerChoice = getComputerChoice();
          
          // Add a small pause before showing the result
          setTimeout(() => {
              // Play the round with the choices
              playRound(humanChoice, computerChoice);
              
              // Update round count and display
              roundsPlayed++;
              rounds.textContent = `Round ${roundsPlayed}`;
              
              // Update scores on the page
              updateScores();
              
              // Add the round result to the game log
              getResultText(humanChoice, computerChoice);
              
              // Check if game is over after updating everything
              checkGameOver();
          }, 500);
      }, 1000);

  // Helper function to get result text based on the choices
  function getResultText(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      gameLog.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        gameLog.textContent = `${humanChoice} beats ${computerChoice}! You win!`;
    } else {
        gameLog.textContent = `${computerChoice} beats ${humanChoice}! You lose, sorry.`;
    }
  }
  
  // function to update scores on page
  function updateScores() {
    humanHtml.textContent = humanScore;
    computerHtml.textContent = computerScore;
  }
  
}
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "rock") {
    humanScore++;
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    humanScore++;
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    humanScore++;
    computerScore++;
  }
}

function playGame() {
  const rockButton = document.querySelector("#rock");
  const paperButton = document.querySelector("#paper");
  const scissorsButton = document.querySelector("#scissors");

  rockButton.addEventListener('click', () => handleChoice('rock'));
  paperButton.addEventListener('click', () => handleChoice('paper'));
  scissorsButton.addEventListener('click', () => handleChoice('scissors'));
}
