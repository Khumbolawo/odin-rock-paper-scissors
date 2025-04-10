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

let gameLog = document.querySelector(".game-log-text");
gameLog.textContent = "Pick your weapon!";
playGame();


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
  if (roundsPlayed == 5) {
    gameLog.textContent = "Game Over! Reload the page";
    return;
  }else{
    roundsPlayed++;
    rounds.textContent = `Round ${roundsPlayed}`;
  }
  
}

// main game logic
function handleChoice(choice) {
  const humanChoice = choice;
  gameLog.textContent = `You picked ${humanChoice}. `;

  // delay so that player sees their choise before the computer's choice shows
  setTimeout(() => {
    const compChoice = getComputerChoice();
    
    // another delay to improve the game feel
    setTimeout(() => {
      playRound(humanChoice, compChoice);
      getResultText(humanChoice, compChoice);

      // Update the scores after a delay
      setTimeout(() => {
        updateScores();

        // Update to the next round after a delay
        setTimeout(() => {
          updateRounds();
          gameLog.textContent = "Pick your weapon!";
      }, 2000);
      }, 2000);
      
      
    }, 2000);

  }, 2000);

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
    if (humanScore == 5 || computerScore == 5) {
      gameLog.textContent = "Game Over! Reload the page";
      humanHtml.textContent = humanScore;
      computerHtml.textContent = computerScore;
    } else {
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
