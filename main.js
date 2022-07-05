



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

console.log(computerPlay());

var computerSelection = computerPlay();
var playerSelection = prompt("Rock, paper, or scissors?");

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You won! Rock beats scissors!"
        } else {
            return "You lost! Paper beats rock!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You won! Paper beats rock!"
        } else {
            return "You lost! Scissors rockbeat paper!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You won! Scissors beat paper!"
        } else {
            return "You lost! Rock beats scissors!"
        }
    }
};

playGame(playerSelection,computerSelection);