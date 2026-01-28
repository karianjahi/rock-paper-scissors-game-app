const options = ["Rock", "Paper", "Scissors"];

const getRandomComputerResult = () => {
     const min = 0;
     const max = 2;
     const random = Math.floor(Math.random() * (max - min + 1));
    //  console.log(typeof array[random]);
     return options[random];
};


const hasPlayerWonTheRound = (playerChoice, computerChoice) => {
    if (playerChoice === "Rock" && computerChoice === "Scissors") return true;
    if (playerChoice === "Scissors" && computerChoice === "Paper") return true;
    if (playerChoice === "Paper" && computerChoice === "Rock") return true;
    return false;
};

// let pl = getRandomComputerResult();
// let co = getRandomComputerResult();
// verdict = hasPlayerWonTheRound(pl, co);
// let result;
// if (verdict) {
//     result = 'Player has won';
// } else {
//     result = 'Player has lost';
// }

// console.log(`Player chose ${pl} and Computer chose ${co}: ${result}`);

