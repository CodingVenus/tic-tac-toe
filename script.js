// console.log("JS is connected")
//VARIABLES
let currentPlayer = "";
let gameBoard = "";

const winningCombinations = [
    //Across
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    //Down
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    //Diagonal
    [1, 4, 8]
    [6, 4, 2]

]




// // As a user, I should be able to start a new tic tac toe game
// function startGame()




// // As a user, I should be able to click on a square to add X first and then O, and so on
function clickSquare(square, index) {

    let squareClicked = square.target;
    let squareClickedIndex = index;
    console.log(squareClickedIndex)
    //??? how to get index of square clicked
}



// // As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
// function displayWinner()
// function displayDraw()
// function currrentPlayer()


// // As a user, I should not be able to click the same square twice
// function checkSquare()


// // As a user, I should be shown a message when I win, lose or tie


// // As a user, I should not be able to continue playing once I win, lose, or tie
// function stopGame()

// // As a user, I should be able to play the game again without refreshing the page
// //preventdeafult?





//make an array of the divs
const squares = document.getElementsByClassName('square');
console.log(squares)

// //QuerySelectors
// let myClick = squares.addEventListener('click', clickSquare)
// squares[0].addEventListener('click', clickSquare)
Array.from(squares).forEach(function(square, index) {
    square.addEventListener('click', () => clickSquare(square, index))
})
