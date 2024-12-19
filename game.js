let randomNumber;
let minRange;
let maxRange;
let score = 0;

function startGame() {
  // Get min and max range from the user input
  minRange = parseInt(document.getElementById('minRange').value);
  maxRange = parseInt(document.getElementById('maxRange').value);

  // Validate the range inputs
  if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
    alert("Please enter valid ranges (Min < Max).");
    return;
  }

  // Generate a random number within the specified range
  randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

  // Hide the input fields and show the game area
  document.getElementById('gameArea').style.display = 'block';
  document.getElementById('instructions').textContent = `Guess the number between ${minRange} and ${maxRange}!`;
  document.getElementById('score').textContent = 'Score: ' + score;
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
    return;
  }

  if (guess === randomNumber) {
    score++;
    document.getElementById('message').textContent = "Congratulations! You guessed the correct number!";
    document.getElementById('message').style.color = 'green';
    document.getElementById('score').textContent = 'Score: ' + score;

    // Generate a new number for the next round
    randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  } else if (guess < randomNumber) {
    document.getElementById('message').textContent = "Too low! Try again.";
    document.getElementById('message').style.color = 'blue';  // changed color to blue
  } else {
    document.getElementById('message').textContent = "Too high! Try again.";
    document.getElementById('message').style.color = 'blue';  // changed color to blue
  }
}
