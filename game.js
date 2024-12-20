let randomNumber;
let attempts;
let startRange;
let endRange;

function startGame() {
    startRange = parseInt(prompt("Enter the starting range:"));
    endRange = parseInt(prompt("Enter the ending range:"));

    if (isNaN(startRange) || isNaN(endRange) || startRange >= endRange) {
        alert("Please enter valid range values (starting range should be less than ending range).");
        return;
    }

    randomNumber = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
    attempts = 0;

    document.getElementById("hint").textContent = `Guess a number between ${startRange} and ${endRange}.`;

    while (true) {
        const userGuess = parseInt(prompt("Enter your guess:"));
        attempts++;

        if (isNaN(userGuess)) {
            alert("Please enter a valid number.");
            continue;
        }

        if (userGuess === randomNumber) {
            alert(`Congratulations! You guessed it right in ${attempts} attempts.`);
            break;
        } else if (userGuess < randomNumber) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }
}

document.getElementById("startGame").addEventListener("click", startGame);
