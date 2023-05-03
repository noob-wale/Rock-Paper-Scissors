const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const choices = ["roCk", "paPer", "scisSors"];

const getComputerChoice = () => Math.floor(Math.random() * choices.length);

function playRound() {
  const computerSelection = choices[getComputerChoice()].toLowerCase();
  const playerSelection = prompt(
    "To Play either type 'rock', 'paper', or 'scissors'..."
  ).toLowerCase();
  if (playerSelection == computerSelection) {
    return "Its A Tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "You Lose! Rock Crashes Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return "You Lose! Scissors Cuts Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return "You Lose! Paper Covers Rock";
  }
}

function game() {
  let i = 0;
  while (i < 5) {
    console.log(playRound());
    i++;
  }
}

// game();

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
