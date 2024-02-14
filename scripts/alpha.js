function play() {
  // hide the home page
  hideElementById("home-page");
  hideElementById("finalScoreCard");

  // go to playground
  showElementById("playground");

  // display random number
  continuePlay();
}
function playAgain() {
  const lifeElement = document.getElementById("life");
  lifeElement.innerText = 10;
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = 0;

  play();
}

document.addEventListener("keyup", keyboardKeyPress);
function keyboardKeyPress(event) {
  //   user pressed alphabet
  const userPressed = event.key;
  if (userPressed === "Escape") {
    gameOver();
  }
  // display alphabet access
  const displayAlphabet = document.getElementById("display").innerText;

  // comparing user press and display alphabet
  if (userPressed === displayAlphabet) {
    removeBackgroundColorById(displayAlphabet);
    continuePlay();

    // get the score text
    const scoreElement = document.getElementById("score");
    const score = parseInt(scoreElement.innerText);
    const newScore = score + 1;
    // set the new score
    scoreElement.innerText = newScore;
  } else {
    // get the life text
    const lifeElement = document.getElementById("life");
    const life = parseInt(lifeElement.innerText);
    const newLife = life - 1;
    // set the new life count
    lifeElement.innerText = newLife;

    if (newLife === 0) {
      gameOver();
    }
  }
}

function continuePlay() {
  // display alphabet to board
  const display = document.getElementById("display");
  display.innerText = generateRandomAlphabet();

  // set background to keys
  setBackgroundColorById(display.innerText);
}

function generateRandomAlphabet() {
  // generate random number
  const randomNumber = Math.round(Math.random() * 25);

  const alphbets = "abcdefghijklmnopqrstuvwxyz";
  const alpha = alphbets.split("");

  const randomAlphabet = alpha[randomNumber];
  return randomAlphabet;
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);

  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);

  element.classList.remove("hidden");
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-green-800", "text-white");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-green-800", "text-white");
}

function gameOver() {
  hideElementById("playground");
  showElementById("finalScoreCard");
  const finalScore = document.getElementById("finalScore");
  const score = document.getElementById("score").innerText;
  finalScore.innerText = score;
  const lastAlphabet = document.getElementById("display").innerText;
  removeBackgroundColorById(lastAlphabet);
}
