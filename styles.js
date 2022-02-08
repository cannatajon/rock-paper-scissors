const options = ["Rock", "Paper", "Scissors"];

const scoreBoard = {
  playerScore: 0,
  computerScore: 0,
};

let currentWinner = "";
let wallet = 200;

function rand() {
  return options[Math.floor(Math.random() * options.length)];
}

function rockChoice() {
  userChoice = options[0];
  playGame();
  gambling();
  //if results were only appended and not rewritten, this drops to the bottom of the page on click to instantly see new result
  //window.scrollTo(0,document.body.scrollHeight);
}
function paperChoice() {
  userChoice = options[1];
  playGame();
  gambling();
  //window.scrollTo(0,document.body.scrollHeight);
}
function scissorsChoice() {
  userChoice = options[2];
  playGame();
  gambling();
  //window.scrollTo(0,document.body.scrollHeight);
}
function reset() {
  const resultP = document.getElementById("result");
  resultP.innerHTML = "";
  const scoreP = document.getElementById("score");
  scoreP.innerHTML = "";
  scoreBoard.playerScore = 0;
  scoreBoard.computerScore = 0;
  currentWinner = "";
  wallet = 200;
  const walletP = document.getElementById("wallet");
  walletP.innerHTML = "$" + wallet;
}

document.getElementById("rock").addEventListener("click", rockChoice);
document.getElementById("paper").addEventListener("click", paperChoice);
document.getElementById("scissors").addEventListener("click", scissorsChoice);
document.getElementById("reset").addEventListener("click", reset);

function playGame() {
  display(" ");
  computerChoice = rand();

  if (computerChoice === userChoice) {
    display(
      userChoice +
        ". Computer chooses " +
        computerChoice +
        ". Draw - the only thing worse than losing."
    );
    currentWinner = "";
    displayScore(
      "Computer: " +
        scoreBoard.computerScore +
        "\n You: " +
        scoreBoard.playerScore +
        "\n"
    );
  } else if (computerChoice === options[0]) {
    if (userChoice === options[1]) {
      display(
        userChoice + ". Computer chooses " + computerChoice + ". Player Wins"
      );
      scoreBoard.playerScore += 1;
      currentWinner = "player";
      displayScore(
        "Computer: " +
          scoreBoard.computerScore +
          "\n You: " +
          scoreBoard.playerScore +
          "\n"
      );
    } else {
      display(
        userChoice +
          ". Computer chooses " +
          computerChoice +
          ". Can't beat a machine"
      );
      scoreBoard.computerScore += 1;
      currentWinner = "computer";
      displayScore(
        "Computer: " +
          scoreBoard.computerScore +
          "\n You: " +
          scoreBoard.playerScore +
          "\n"
      );
    }
  } else if (computerChoice === options[1]) {
    if (userChoice === options[2]) {
      display(
        userChoice + ". Computer chooses " + computerChoice + ". Player Wins"
      );
      scoreBoard.playerScore += 1;
      currentWinner = "player";
      displayScore(
        "Computer: " +
          scoreBoard.computerScore +
          "\n You: " +
          scoreBoard.playerScore +
          "\n"
      );
    } else {
      display(
        userChoice +
          ". Computer chooses " +
          computerChoice +
          ". Can't beat a machine"
      );
      scoreBoard.computerScore += 1;
      currentWinner = "computer";
      displayScore(
        "Computer: " +
          scoreBoard.computerScore +
          "\n You: " +
          scoreBoard.playerScore +
          "\n"
      );
    }
  } else if (computerChoice === options[2]) {
    if (userChoice === options[0]) {
      display(
        userChoice + ". Computer chooses " + computerChoice + ". Player Wins"
      );
      scoreBoard.playerScore += 1;
      currentWinner = "player";
      displayScore(
        "Computer: " +
          scoreBoard.computerScore +
          "\n You: " +
          scoreBoard.playerScore +
          "\n"
      );
    } else {
      display(
        userChoice +
          ". Computer chooses " +
          computerChoice +
          ". Can't beat a machine"
      );
      scoreBoard.computerScore += 1;
      currentWinner = "computer";
      displayScore(
        "Computer: " +
          scoreBoard.computerScore +
          "\n You: " +
          scoreBoard.playerScore +
          "\n"
      );
    }
  }

  console.log(scoreBoard);
  console.log(currentWinner);
}

function display(result) {
  //this approach  updates new results in the same 'p' container on click, instead of creating a new 'p' element every time and appending with appendChild
  const resultP = document.getElementById("result");
  resultP.innerHTML = result;
}

function displayScore(score) {
  const scoreP = document.getElementById("score");
  scoreP.innerHTML = score;
}

function gambling() {
  if (currentWinner == "player") {
    if (document.getElementById("betFive").checked) {
      wallet += 5;
    } else if (document.getElementById("betTen").checked) {
      wallet += 10;
    } else if (document.getElementById("betTwentyFive").checked) {
      wallet += 25;
    } else if (document.getElementById("betFifty").checked) {
      wallet += 50;
    }
  } else if (currentWinner == "computer") {
    if (document.getElementById("betFive").checked) {
      wallet -= 5;
    } else if (document.getElementById("betTen").checked) {
      wallet -= 10;
    } else if (document.getElementById("betTwentyFive").checked) {
      wallet -= 25;
    } else if (document.getElementById("betFifty").checked) {
      wallet -= 50;
    }
  }
  const walletP = document.getElementById("wallet");
  walletP.innerHTML = "$" + wallet;
  console.log(wallet);
}
