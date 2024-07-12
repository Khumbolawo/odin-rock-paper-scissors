//getComputerChoice
function getComputerChoice() {
  //init variable to store choice
  let computerChoice;
  //generate random number between 0 and 100
  let result = Math.floor(Math.random() * 100);

  //pick rock, paper or scissors based on number generated
  if (result > 0 && result <= 33) {
    computerChoice = "rock";
    console.log(`The computer picks ${computerChoice}`);
  } else if (result > 33 && result <= 67) {
    computerChoice = "scissors";
    console.log(`The computer picks ${computerChoice}`);
  } else {
    computerChoice = "paper";
    console.log(`The computer picks ${computerChoice}`);
  }
}

getComputerChoice();

//getHumanChoice

function getHumanChoice() {
  //variable to ask for and store human choice
  let humanChoice = prompt("Pick between rock, paper and scissors: ");
  humanChoice = humanChoice.toLowerCase;
  //validating the input
  if (
    humanChoice == "rock" ||
    humanChoice == "scissors" ||
    humanChoice == "paper"
  ) {
    console.log(`You picked ${humanChoice}`);
    return humanChoice;
  } else {
    console.log("Please pick a valid move");
  }
}

getHumanChoice();

//player score variables

let humanScore = 0;
let computerScore = 0;

//playRound

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("It's a tie!");
    humanScore++;
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log(`${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log(`${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  }
}
