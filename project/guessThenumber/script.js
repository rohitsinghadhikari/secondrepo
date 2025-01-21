// Optimized script.js
const randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.getElementById("subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

let prevGuesses = [];
let attemptsLeft = 10;
let gameActive = true;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!gameActive) return;

  const guess = parseInt(userInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  prevGuesses.push(guess);
  attemptsLeft--;

  updateDisplay(guess);
  checkGuess(guess);
});

function updateDisplay(guess) {
  userInput.value = "";
  guessSlot.textContent = prevGuesses.join(", ");
  remaining.textContent = attemptsLeft;
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Congratulations! You guessed it right!");
    endGame();
  } else if (attemptsLeft === 0) {
    displayMessage(`Game Over! The number was ${randomNumber}.`);
    endGame();
  } else {
    displayMessage(
      guess < randomNumber ? "Too low! Try again." : "Too high! Try again."
    );
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  gameActive = false;
  userInput.disabled = true;
  const newGameButton = document.createElement("button");
  newGameButton.textContent = "Start New Game";
  newGameButton.classList.add("button");
  resultParas.appendChild(newGameButton);

  newGameButton.addEventListener("click", startNewGame);
}

function startNewGame() {
  prevGuesses = [];
  attemptsLeft = 10;
  gameActive = true;
  userInput.disabled = false;
  userInput.value = "";
  guessSlot.textContent = "";
  remaining.textContent = attemptsLeft;
  lowOrHi.textContent = "";
  resultParas.querySelector("button").remove();
}
