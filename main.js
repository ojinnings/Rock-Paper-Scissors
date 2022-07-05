



/* generate a random number to select what the computer will play*/

function computerPlay() {

    var randomnum = Math.floor(Math.random() *3) + 1;

    if (randomnum === 1) {
        return "Rock"
    } else if (randomnum === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
};

console.log(computerPlay())

var computerSelection = computerPlay();
var playerSelection = prompt("Rock, paper, or scissors?");

/*
function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock"
    }  else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors"
    } else if (playerSelection === paper && computerSelection === scissors) {
        return 
    }
    
    
          

}*/





function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    } else if (playerSelection === "rock") {
        if (computerSelection === scissors) {
            return "You won! Rock beats scissors!"
        } else {
            return "You lost! Paper beats rock!"
        }
    } else if (playerSelection === "")
}




winning (computer)
rock vs scissors x
paper vs rock x
scissors vs paper x

losing (computer)
scissors vs paper
paper vs rock
rock vs scissors