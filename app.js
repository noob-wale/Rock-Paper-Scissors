let playerSelection;
let playerResult = 0;
let computerResult = 0;

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function () {
  playerSelection = 'rock';
  playRound(playerSelection);
  scoreUpdate();
});

paper.addEventListener('click', function () {
  playerSelection = 'paper';
  playRound(playerSelection);
  scoreUpdate();
});

scissors.addEventListener('click', function () {
  playerSelection = 'scissors';
  playRound(playerSelection);
  scoreUpdate();
});

function scoreUpdate() {
  playerScore.textContent = `Player Score:${playerResult}`;
  computerScore.textContent = `Computer Score:${computerResult}`;
};

const choices = ["roCk", "paPer", "scisSors"];

const getComputerChoice = () => Math.floor(Math.random() * choices.length);

function playRound() {
  const computerSelection = choices[getComputerChoice()].toLowerCase();

  if (playerSelection == computerSelection) {
    console.log('its a tie')
    // return "Its A Tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerResult += 1;
    console.log('you win');
    // return "You Win";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    computerResult += 1;
    console.log('you lose');
    // return "You Lose! Rock Crashes Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerResult += 1;
    console.log('you win');
    // return "You Win";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    computerResult += 1;
    console.log('you lose');
    // return "You Lose! Scissors Cuts Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerResult += 1;
    console.log('you win');
    // return "You Win";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    computerResult += 1;
    console.log('you lose')
    // return "You Lose! Paper Covers Rock";
  };
};

function game() {
  let i = 0;
  while (i < 5) {
    console.log(playRound());
    i++;
  };
};

// game();

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
