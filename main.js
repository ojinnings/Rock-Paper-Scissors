




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

