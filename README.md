

# Venus Teah - Tic Tac Toe Project

[Link to game!](https://eager-engelbart-e549a4.netlify.app/)


## Objective
-  Create a Tic-Tac-Toe web application game, utilizing HTML, CSS, and Javascript



## User Stories

1. As a user, I should be able to start a new tic tac toe game
2. As a user, I should be able to click on a square to add X first and then O, and so on
3. As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
4. As a user, I should not be able to click the same square twice
5. As a user, I should be shown a message when I win, lose or tie
6. As a user, I should not be able to continue playing once I win, lose, or tie
7. As a user, I should be able to play the game again without refreshing the page


## Wire Frames
-  [Wire Frame](https://imgur.com/a/lDNfGmk)

- I decided on a simple 3 x 3 grid as the setting for the Tic Tac Toe Game.

## Technologies Used

- Javascript
- HTML
- CSS
- Git
- Netlify

## The Process

- I began my process by creating pseudo code that would represent the game logic.
- I then created a bare-bones 3 x 3 grid which utilized HTML divs along with styling through the CSS Grid Layout.
- I gave each of these divs a temporary number assignment starting from 0.
    - This was a preemptive measure that I believed would help me more easily track click events within the console, as well as allow me to visualize how to create the logic to determine the winner.
    - [Numbered Grid](https://imgur.com/a/y0u12qz)
    
- I then considered the User Stories and came up with empty functions within my Javascript file that would satisfy each one. 
    - For example, the first User Story “As a user, I should be able to start a new tic tac toe game” was given the function **startNewGame()**
    - This helped keep my code organized and ensured that I would not forget to meet each requirement.

### Challenges
- The biggest hurdle I faced was deciding which method I wanted to use to determine the winner.
- This approach went through a lot of changes in the actual code, and eventually matured from a string of if/else statements, to creating a matrix that would mirror the grid placements. This matrix would contain a list of potential combinations that would result in a Three-In-A-Row win: horizontally, vertically, or diagonally. 
- Two issues I spent the most time on was properly formulating click event listeners and their respective event handlers, and comparing the index of the HTML grid divs, to the index of the winning combinations.
- Through hours of research and refamiliarizing myself with some fundamentals in JS DOM Manipulation, I was able to eventually succeed in creating logic that would determine the winner.

## Resources
While I used many different resources, these provided me with the most assistance:

#### JavascriptTutorial.Net
- [Iterating Over Selected Elements](https://www.javascripttutorial.net/dom/manipulating/iterate-over-selected-elements/)

#### W3Schools
- [Overview of .includes](https://www.w3schools.com/jsref/jsref_includes_array.asp)
- [Overview of .forEach](https://www.w3schools.com/jsref/jsref_foreach.asp)
- [Overview of Add Event Listener](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
- [Overview of Grid-Template](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-template-columns)

### MDN Docs 
- [Overview of Click Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
- [Overview of .includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

### Misc.
- [Dmitiri P. Blog -- Iterating over Array-Like Objects](https://dmitripavlutin.com/foreach-iterate-array-javascript/#6-iterate-array-like-objects-using-foreach)
- [Youtube -- Introduction to Event Listeners](https://www.youtube.com/watch?v=EaRrmOtPYTM&list=PLyuRouwmQCjnEupVi5lpP6VrLg-eO-Zcp)


## Future Iterations
- Add more modern styling features to the app.
- Create a scoreboard for players.
