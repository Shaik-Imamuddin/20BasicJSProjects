const choices = ['Rock', 'Paper', 'Scissors'];

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    document.getElementById("user-choice").textContent = `Your Choice: ${userChoice}`;
    document.getElementById("computer-choice").textContent = `Computer Choice: ${computerChoice}`;
    
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result = "You Win!";
    } else {
        result = "You Lose!";
    }

    document.getElementById("game-result").textContent = result;
}
