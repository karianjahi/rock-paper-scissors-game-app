const options = ["Rock", "Paper", "Scissors"];

const getRandomComputerResult = () => {
     const min = 0;
     const max = 2;
     const random = Math.floor(Math.random() * (max - min + 1));
     return options[random];
};


const hasPlayerWonTheRound = (playerChoice, computerChoice) => {
    if (playerChoice === "Rock" && computerChoice === "Scissors") return true;
    if (playerChoice === "Scissors" && computerChoice === "Paper") return true;
    if (playerChoice === "Paper" && computerChoice === "Rock") return true;
    return false;
};




let playerScore = 0;
let computerScore = 0;


function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`
    } else if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore += 1;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else {
        computerScore += 1;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }

};


const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");


const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultsMsg.textContent = getRoundResults(userOption);
    playerScoreSpanElement.textContent = playerScore;
    computerScoreSpanElement.textContent = computerScore;
    if (playerScore == 3 || computerScore == 3) {
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
    if (playerScore === 3) return winnerMsgElement.textContent = "Player has won the game!"
    if (computerScore == 3) return winnerMsgElement.textContent = "Computer has won the game!"
};


const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Event listeners
rockBtn.addEventListener("click", () => {
    showResults("Rock");
});

paperBtn.addEventListener("click", () => {
    showResults("Paper");
});

scissorsBtn.addEventListener("click", () => {
    showResults("Scissors");
});


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.textContent = playerScore;
    computerScoreSpanElement.textContent = computerScore;
    winnerMsgElement.textContent = "";
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    roundResultsMsg.textContent = "";

}

resetGameBtn.addEventListener("click", resetGame);


