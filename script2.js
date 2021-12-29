//VARIABLES

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameStopped = false;
//Each element represents a combination of indexes on the grid that will result in a winner 
const winningCombinations = [
    //Across
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Down
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonal
    [0, 4, 8],
    [6, 4, 2]
]

//FUNCTIONS
//Clicking this function will clear the board and reset Current Player to X
function startNewGame() {

    currentPlayer = "X";
    gameStopped = false;
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameMessage.innerHTML = displayPlayer();
    document.querySelectorAll('.square').forEach(function (square) {
        square.innerHTML = ""
    })


}

//After square is clicked, check to see if game can run, update gameBoard index and Square text
function clickSquare(square, squareIndex) {

    //if game board has a value in index or gameStopped variable is true, stop program from moving forward

    if (gameBoard[squareIndex] || gameStopped) {
        return;
    }

    gameMessage.innerHTML = displayPlayer();

    //make changes to gameboard
    square.innerHTML = currentPlayer;
    gameBoard[squareIndex] = currentPlayer;

    //track conditions and determine winner
    determineWinner();
}

//Iterates through the array of winningCombinations and compares gameBoard values as those indexes
function determineWinner() {
    let winner = false;

    for (let i = 0; i < 8; i++) {

        const winnerCombo = winningCombinations[i];

        let boardCheckOne = gameBoard[winnerCombo[0]];
        let boardCheckTwo = gameBoard[winnerCombo[1]];
        let boardCheckThree = gameBoard[winnerCombo[2]];

        if (!boardCheckOne || !boardCheckTwo || !boardCheckThree) {
            //continue the loop without going onto the next if statement
            continue;
        }

        if (boardCheckOne === boardCheckTwo && boardCheckTwo == boardCheckThree) {
            winner = true;
            //end the loop
            break;
        }

    }

    // Winner
    if (winner) {
        gameMessage.innerHTML = displayWinner();
        gameStopped = true;
        return;
    }

    // Tie
    let isATie = !gameBoard.includes("");


    if (isATie) {
        gameMessage.innerHTML = displayTie();
        gameStopped = true;
        return;
    }

    //If no conditions are satisifed, this function will be called 
    nextPlayer();
}

//Switch between X and O Player
function nextPlayer() {

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X"
    }
    gameMessage.innerHTML = displayPlayer();
}

//Message Functions
function displayWinner() {
    return `Player ${currentPlayer} Has Won!`
}
function displayTie() {
    return "Both Players Have Tied!";
}
function displayPlayer() {
    return `It is Player ${currentPlayer}'s Turn`;
}

 //QUERY SELECTORS
 
    //button
document.querySelector('.new-game').addEventListener('click', startNewGame)

    //game result text
const gameMessage = document.querySelector('.game-message')

    //make an array of the divs
const squares = document.getElementsByClassName('square');

    //cycle through array, adding click function to each element
    //utilize forEach function capabilites to retrieve index in event handler
Array.from(squares).forEach(function (square, squareIndex) {
    square.addEventListener('click', () => clickSquare(square, squareIndex));
})
//-->dmitri pavlutin blog, "how to iterate array-like objects using forEach"
