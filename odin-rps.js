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
    return computerChoice;
  } else if (result > 33 && result <= 67) {
    computerChoice = "scissors";
    console.log(`The computer picks ${computerChoice}`);
    return computerChoice;
  } else {
    computerChoice = "paper";
    console.log(`The computer picks ${computerChoice}`);
    return computerChoice;
  }
}

//getHumanChoice

function getHumanChoice() {
  //variable to ask for and store human choice
  let humanChoice = prompt("Pick between rock, paper and scissors: ");
  humanChoice = humanChoice.toLowerCase();
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
    console.log(`${humanChoice} beats ${computerChoice}! You win!`);
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log(`${computerChoice} beats ${humanChoice}! You lose, sorry.`);
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log(`${computerChoice} beats ${humanChoice}! You lose, sorry.`);
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("It's a tie!");
    humanScore++;
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log(`${humanChoice} beats ${computerChoice}! You win!`);
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log(`${humanChoice} beats ${computerChoice}! You win!`);
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log(`${computerChoice} beats ${humanChoice}! You lose, sorry.`);
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("It's a tie!");
    humanScore++;
    computerScore++;
  } else {
    console.log("something wierd happened");
  }
}

//playGame

function playGame() {
  //roundsplayed
  let roundsPlayed = 0;

  while (roundsPlayed < 5) {
    // choice variables
    const humanSelection = getHumanChoice();
    const compSelection = getComputerChoice();

    playRound(humanSelection, compSelection);
    roundsPlayed++;
    console.log(`Rounds so far: ${roundsPlayed}`);
    console.log(`Points so far \n
        You: ${humanScore}. CPU: ${computerScore}
        `);
  }
  if (humanScore > computerScore) {
    console.log(
      `You win! The score is you: ${humanScore} and CPU: ${computerScore}`
    );
  } else {
    console.log(
      `You lose. The score is you: ${humanScore} and CPU: ${computerScore}`
    );
  }
}

playGame();
