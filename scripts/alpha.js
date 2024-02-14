function play() {
  // hide the home page
  const homeScreen = document.getElementById("home-page");
  homeScreen.classList.add("hidden");

  // go to playground

  const playground = document.getElementById("playground");
  playground.classList.remove("hidden");

  // display random number
  continuePlay();

  // key highlight
}
document.addEventListener("keyup", keyboardKeyPress);
function keyboardKeyPress(event) {
  //   user pressed alphabet
  const userPressed = event.key;

  // display alphabet access
  const displayAlphabet = document.getElementById("display").innerText;

  // comparing user press and display alphabet
  if (userPressed === displayAlphabet) {
    removeBackgroundColorById(displayAlphabet);
    continuePlay();
  } else {
    console.log("ohh noo");
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

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-green-800", "text-white");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-green-800", "text-white");
}
