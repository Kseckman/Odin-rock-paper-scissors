const resultsDiv = document.querySelector('.results');
const WinnerMsg = document.querySelector('.Winner-msg');
const playerTally = document.querySelector('.player-score');
const computerTally = document.querySelector('.computer-score');
const resultsMsg= document.getElementById("results-msg");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
    console.log('rock')
    showGame("rock");
});
  
paperBtn.addEventListener("click", function () {
    showGame("paper");
});
  
scissorsBtn.addEventListener("click", function () {
    showGame("scissors");
});

const options = ['rock','paper','scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
const choice = options[Math.floor(Math.random()*options.length)]
return choice;
}

function isWinner(humanChoice, computerChoice){
    if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
      ){
        return 'Player';
      } else if (humanChoice == computerChoice){
        return 'Tie';
      } else {
        return 'computer';
      }
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    const result = isWinner(humanChoice, computerChoice);
        if(result == 'Tie'){
            console.log('tie')
            return 'Its a tie!'
        } else if(result == 'Player'){
            humanScore ++
            console.log(`player wins ${humanScore}`)
            return ` You Win! ${humanChoice} beats ${computerChoice}`
        } else {
            computerScore ++
            console.log(`computer wins ${computerScore}`)
            return ` You lose! ${computerChoice} beats ${humanChoice}`
        }
}

function showGame(humanChoice){
  resultsMsg.innerText = playRound(humanChoice)
    playerTally.innerText = humanScore;
    computerTally.innerText = computerScore;
    if(humanScore === 5 || computerScore ===5){
      WinnerMsg.innerText = `${humanScore ===5 ? 'Player': 'Computer'} has won the game!`;
    }
}
