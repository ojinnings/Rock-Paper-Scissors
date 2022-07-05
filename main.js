



/* generate a random number to select what the computer will play*/

function computerPlay() {

    let randomnum = Math.floor(Math.random() *3) + 1;

    if (randomnum === 1) {
        return "rock"
    } else if (randomnum === 2) {
        return "paper"
    } else {
        return "scissors"
    }
};

function playRound() {

let computerSelection = computerPlay();
let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

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
            return "You lost! Scissors beat paper!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You won! Scissors beat paper!"
        } else {
            return "You lost! Rock beats scissors!"
        }
    } else {
        return "That's not a valid weapon."
    }
};




function game() { 
    let score = 0
    for (i=0; i<5; i++) {
        
          let roundResult = playRound();
          console.log(roundResult);

          if (roundResult.search("You won!") != -1) {
            score++;
          }
    }
    console.log(score);
   
}

game();