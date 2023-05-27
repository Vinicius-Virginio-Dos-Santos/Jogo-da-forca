const words = ["banana", "abacaxi", "laranja", "morango", "uva"];
const randomWord = words[Math.floor(Math.random() * words.length)];

let remainingGuesses = 6;
let guessedLetters = [];
let wordDisplay = "";

function initializeGame() {
  for (let i = 0; i < randomWord.length; i++) {
    wordDisplay += "_ ";
  }
  document.getElementById("word-display").textContent = wordDisplay;
  document.getElementById(
    "guesses"
  ).textContent = `Tentativas Restantes: ${remainingGuesses}`;
}

function guessLetter() {
  const input = document.getElementById("guess-input");
  const letter = input.value.toLowerCase();

  if (!letter.match(/[a-z]/i)) {
    alert("Por favor, insira uma letra válida!");
    return;
  }

  if (guessedLetters.includes(letter)) {
    alert("Você já adivinhou essa letra!");
    return;
  }

  guessedLetters.push(letter);
  updateWordDisplay();

  if (!randomWord.includes(letter)) {
    remainingGuesses--;
    updateRemainingGuesses();
    checkGameStatus();
  }

  input.value = "";
  input.focus();
}

function updateWordDisplay() {
  let updatedWordDisplay = "";

  for (let i = 0; i < randomWord.length; i++) {
    if (guessedLetters.includes(randomWord[i])) {
      updatedWordDisplay += randomWord[i] + " ";
    } else {
      updatedWordDisplay += "_ ";
    }
  }

  document.getElementById("word-display").textContent = updatedWordDisplay;
  wordDisplay = updatedWordDisplay;
}

function updateRemainingGuesses() {
  document.getElementById(
    "guesses"
  ).textContent = `Tentativas Restantes: ${remainingGuesses}`;
}

function checkGameStatus() {
  if (remainingGuesses === 0) {
    alert("Você perdeu! A palavra era: " + randomWord);
    resetGame();
  }

  if (!wordDisplay.includes("_")) {
    alert("Parabéns, você ganhou!");
    resetGame();
  }
}

function resetGame() {
  remainingGuesses = 6;
  guessedLetters = [];
  wordDisplay = "";
  initializeGame();
}

initializeGame();
