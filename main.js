// calculate computer selection getComputerChoice
// allow user to input selection and verify getHumanChoice
// write function to allow a single game to play
// function should take player selection and computer selection
// function should declaire a winner

const options = ['rock','paper','scissors'];


// write computer choice function that returns rock paper scissors.

function getComputerChoice(){
// random selection
const choice = options[Math.floor(Math.random()*options.length)]
return choice;
}

//human choice
function getHumanChoice(){
    //validate choice/ use prompt to get choice input
    let isValid = false;
    //loop to continue asking until an option is picked
    while( !isValid){
        let humanChoice = prompt('rock, paper, scissors')
        if(humanChoice == null){
            continue;
        }
        let lowerCaseChoice = humanChoice.toLocaleLowerCase()
        if(options.includes(lowerCaseChoice)){
            isValid= true;
            return lowerCaseChoice;
        }
    }
}

//winner
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


function playRound(humanChoice, computerChoice){
    const result = isWinner(humanChoice, computerChoice);
    if(result == 'Tie'){
        return 'Its a tie!'
    } else if(result == 'Player'){
        return ` You Win! ${humanChoice} beats ${computerChoice}`
    } else {
        return ` You lose! ${computerChoice} beats ${humanChoice}`
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    console.log('Welcome to the game')
    for(let i=0; i <5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log('--------------')
        if(isWinner((humanSelection, computerSelection ) === 'Player')){
            humanScore ++
        } else if(isWinner(humanSelection,computerSelection ) === 'Computer'){
            computerScore ++
        }
    }
    console.log('gameOver')
    if(humanScore > computerScore){
        console.log('YOU WIN')
    } else if(computerScore > humanScore){
        console.log('YOU LOSE')
    } else{
        console.log('Its A tie')
    }
}

playGame()
