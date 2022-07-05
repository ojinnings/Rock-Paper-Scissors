

randomnum = Math.floor(Math.random() *3) + 1;


function computerPlay(number) {
    if (number === 1) {
        return "Rock"
    } else if (number ===2) {
        return "Paper"
    } else {
        return "Scissors"
    }
};

console.log(randomnum);
console.log(computerPlay())

