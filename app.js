let choices = ["rock", "paper", "scissors"]

function getComputerChoice () {
        let choice = Math.floor(Math.random() * choices.length);
        return choice;
    }

let computerSelection = getComputerChoice();

console.log(computerSelection)