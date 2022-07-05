



/* generate a random number to select what the computer will play*/

function computerPlay() {

    var randomnum = Math.floor(Math.random() *3) + 1;

    if (randomnum === 1) {
        return "Rock"
    } else if (randomnum ===2) {
        return "Paper"
    } else {
        return "Scissors"
    }
};

console.log(computerPlay())

var computerSelection = computerPlay();
var playerSelection = prompt("Rock, paper, or scissors?");

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    } else if (playerSelection === "Rock" && computerSelection === paper) {
        return "You lose! Paper beats Rock"
    }
}