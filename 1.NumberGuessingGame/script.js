let randomNumber = Math.floor(Math.random() * 100);

function makeGuess() {
    
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let resultText = '';

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultText = 'Please enter a number between 1 and 100.';
    } else if (userGuess === randomNumber) {
        resultText = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
        resultText = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        resultText = 'Too high! Try again.';
    }

    document.getElementById('result').innerText = resultText;
}