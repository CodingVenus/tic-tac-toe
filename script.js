//VARIABLES
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameStopped = false;

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
    [1, 4, 8],
    [6, 4, 2]
]
console.log(winningCombinations[0])

function determineWinner() {
    let winner = false;

    for (let i = 0; i < 8; i++) {

        let winnerCombo = winningCombinations[i];
        console.log(winnerCombo[0])

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

    if (winner) {
        gameResults.innerHTML = displayWinner();
        console.log(gameResults)
    }

    nextPlayer();

}


// // As a user, I should be able to start a new tic tac toe game
// function startGame()


// // As a user, I should be able to click on a square to add X first and then O, and so on
function clickSquare(square, squareIndex) {


    //if game board has a value in index, stop program from moving forward
    if (gameBoard[squareIndex] || gameStopped) {
        return;
    }
    

    //make changes to gameboard
    square.innerHTML = currentPlayer;
    gameBoard[squareIndex] = currentPlayer;
    console.log(gameBoard[squareIndex])


    //check to make sure game isn't stopped

    

    //switch between X and O for each turn
    determineWinner();
    
}


function nextPlayer() {

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X"
    }
}


// // As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
function displayWinner() {
    return `Player ${currentPlayer} Has Won!`
}
// function displayDraw()
// function currrentPlayer()


// // As a user, I should not be able to click the same square twice
// function checkSquare()


// // As a user, I should be shown a message when I win, lose or tie


// // As a user, I should not be able to continue playing once I win, lose, or tie
// function stopGame()




// // As a user, I should be able to play the game again without refreshing the page
// //preventdeafult?



//QuerySelectors

const gameResults = document.querySelector('.game-results')
console.log(gameResults)

//make an array of the divs
const squares = document.getElementsByClassName('square');
console.log(squares)


//cycle through array, adding click function to each element
//utilize forEach function capabilites to retrieve index in event handler
Array.from(squares).forEach(function (square, squareIndex) {
    square.addEventListener('click', () => clickSquare(square, squareIndex));
}) //-->dmitri pavlutin blog, "how to iterate array-like objects using forEach"
