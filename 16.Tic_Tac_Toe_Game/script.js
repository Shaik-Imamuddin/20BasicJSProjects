let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusDisplay = document.getElementById("status");
const winconditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
        ];
    
function makeMove(cell, index) {
    if (board[index] !== "" || !gameActive) return;
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;

    if (checkWinner()) {
        statusDisplay.innerText = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
        }

    if (!board.includes("")) {
        statusDisplay.innerText = "It's a Draw!";
        gameActive = false;
        return;
        }

currentPlayer = currentPlayer === "X" ? "O" : "X";
statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
    return winconditions.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    statusDisplay.innerText = "Player X's Turn";
}