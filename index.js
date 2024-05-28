// calculate computer selection getComputerChoice
// allow user to input selection and verify getHumanChoice
// write function to allow a single game to play
// function should take player selection and computer selection
// function should declaire a winner

const options = ['rock','paper','scissors'];

function getComputerChoice(){
    // return random selection
    const choice = options[Math.floor(Math.random() * options.length)];
    
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection ==  computerSelection){
        return 'Tie';
    } else if (
        (playerSelection =='rock' && computerSelection =='scissors') || 
        (playerSelection =='scissors' && computerSelection =='paper') || 
        (playerSelection =='paper' && computerSelection =='rock')
    ){
        return 'Player';
    } else{
        return 'Computer';
    }
}

// game function with parameters
function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie'){
      return "It's a Tie!"  
    } else if (result == 'Player') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt('Rock Paper Scissors')
        if(choice == null){
            continue;
        }
        const choiceInlower = choice.toLowerCase();
        if(options.includes(choiceInlower)){
            validatedInput = true;
            return choiceInlower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log('welcome')
    for(let i=0; i <5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('--------------')
        if(checkWinner(playerSelection, computerSelection) == 'Player'){
            scorePlayer ++
        } else if (checkWinner(playerSelection, computerSelection) == 'Computer'){
            scoreComputer ++
        } 
    }
    console.log('game over')
    if(scorePlayer > scoreComputer){
        console.log('Player wins')
    } else if(scorePlayer < scoreComputer){
        console.log('Computer wins')
    } else {
        console.log('We have a tie')
    }
}

game();