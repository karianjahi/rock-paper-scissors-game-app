const options = ["Rock", "Paper", "Scissors"];

const getRandomComputerResult = () => {
     const min = 0;
     const max = 2;
     const random = Math.floor(Math.random() * (max - min + 1));
    //  console.log(typeof array[random]);
     return options[random];
};

