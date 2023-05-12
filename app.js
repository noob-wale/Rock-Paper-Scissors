let playerSelection;
let playerResult = 0;
let computerResult = 0;

//DOM VARIABLES
const scoreBoard = document.querySelector('#scoreboard');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//GAME EVENTLISTENERS
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

//SCOREUPDATE
function scoreUpdate() {
  playerScore.textContent = `Player Score:${playerResult}`;
  computerScore.textContent = `Computer Score:${computerResult}`;
};

//COMPUTERCHOICES
const choices = ["roCk", "paPer", "scisSors"];
const getComputerChoice = () => Math.floor(Math.random() * choices.length);
const computerSelection = choices[getComputerChoice()].toLowerCase();



//PLAYROUND FUNCTION
function playRound() {

//   switch (playerSelection, computerSelection) {
//     case playerSelection === computerSelection:
//       scoreBoard.textContent = 'Its A Tie';
//       console.log('its a tie'); 
//       break;
//     case playerSelection === "rock" && computerSelection === "scissors":
//       scoreBoard.textContent = 'You Win';
//       playerResult += 1;
//       console.log('you win');
//       break;
//     case playerSelection === "scissors" && computerSelection === "paper":
//       scoreBoard.textContent = 'You Win';
//       playerResult += 1;
//       console.log('you win');
//       break;
//     case playerSelection === "paper" && computerSelection === "rock":
//       scoreBoard.textContent = 'You Win';
//       playerResult += 1;
//       console.log('you win');
//       break;  
//     case computerSelection === "rock" && playerSelection === "scissors":
//       scoreBoard.textContent = 'You Lose! Rock Crashes Scissors';
//       computerResult += 1;
//       console.log('you lose');
//       break;
//     case computerSelection === "scissors" && playerSelection === "paper":
//       scoreBoard.textContent = 'You Lose! Scissors Cuts Paper';
//       computerResult += 1;
//       console.log('you lose');
//       break
//     case computerSelection === "paper" && playerSelection === "rock":
//       scoreBoard.textContent = 'You Lose! Paper Covers Rock';
//       computerResult += 1;
//       console.log('you lose');
//       break; 
//   };
// }; 


  if (playerSelection == computerSelection) {
    scoreBoard.textContent = 'Its A Tie';
     console.log('its a tie');
   return "Its A Tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
     scoreBoard.textContent = 'You Win';
     playerResult += 1;
     console.log('you win');
     return "You Win";
   } else if (computerSelection == "rock" && playerSelection == "scissors") {
     scoreBoard.textContent = 'You Lose! Rock Crashes Scissors';
     computerResult += 1;
     console.log('you lose');
      return "You Lose! Rock Crashes Scissors";
   } else if (playerSelection == "scissors" && computerSelection == "paper") {
     scoreBoard.textContent = 'You Win';
     playerResult += 1;
     console.log('you win');
      return "You Win";
   } else if (computerSelection == "scissors" && playerSelection == "paper") {
    scoreBoard.textContent = 'You Lose! Scissors Cuts Paper';
    computerResult += 1;
     console.log('you lose');
     return "You Lose! Scissors Cuts Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
     scoreBoard.textContent = 'You Win';
     playerResult += 1;
     console.log('you win');
      return "You Win";
   } else if (computerSelection == "paper" && playerSelection == "rock") {
     scoreBoard.textContent = 'You Lose! Paper Covers Rock';
    computerResult += 1;
     console.log('you lose')
      return "You Lose! Paper Covers Rock";
   };

  };
// function game() {
//   let i = 0;
//   while (i < 5) {
//     console.log(playRound());
//     i++;
//   };
// };

// game();

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
