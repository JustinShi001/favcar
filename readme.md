# Wireframe: https://imgur.com/a/DUTMwV9

# User stories:
https://git.generalassemb.ly/JustinShi001/game-project-scope-study/blob/response/study.md

# Technology used:
html, css (inc. bootstrap), javascript, jQuery, AJAX, require, grunt,

# Progress Updates and Todo Lists (in reverse order)

## day4-12pm:

### Made the following updates:
- Improved styling (css)
- Able to show total # of game a user has played (using store.games.length)
- Updated game.over status to true when a game has ended (made a new
  function called api.updateGameStatus)

### Todos:
- Make game engine a separate file to be modular
- improve css with page alerts/game stats/background images
- Links to other projects: https://docs.google.com/spreadsheets/d/1uuKnFX4m1G33u6CDe7Nsbp4eJYLauX_YurOm21rv2jc/edit#gid=242157036


## day3-5pm:

### The following is working now:
- Display an error message when user clicked on an occupied cell.
- show or hide certain elements (using .class {display: none} in css)
- find the bug - bug was solved by rerunning "grunt serve"
- logic of how problems were solved:
  - first made the basic game board to work (user doesn't click on an occupied cell
    or an empty cell after game ends)
  - sequence of actions:
      - User start a game
      - New game object created through API
      - User clicks a cell
      - jQuery updates that cell in DOM, and AJAX updates the corresponding array in API
      - Game Logic checks if the game has ended
      - UI display proper message
  - Then started to tackle each anomaly cases:
      - when game has ended: disable the jQuery using store.gameover === false
      - when an occupied cell is clicked: disable
        the jQuery using event.target.html() = <p>'x'</p> or o

### Todos:

- update game.over to true at end of game.
- make the display a game button work.

## day3-3pm:
Solved most remaining issues, including:

- restart a new game and reset which player's turn it is (global variable)
- blocked cells after game has ended;
- Make cells unclickable after it has been occupied (by using jquery)
  $('event.target').html()
- Simplied the code in app.js, events.js, and api.js using event.target,
  square-data property, and passing the index (square-data) info and
  player (x or o) info into the api.update function

## day 2 5pm:
  index.html: I started with an existing index.html file for user authetication.
              Then I created 9 cells using existing template, added 1 button in each cell
              with an unique ID.
  app.js: created event handlers in this file directly for each button, so that
          each time a button is clicked, an "x" or an "o" is placed into the cell.
  events.js: created 9 "onUpdate" functions to handle each button's event once clicked
          these 9 fuctions are referring to 9 "update" functions in api.js
  api.js: created 1 function for each button with corresponding game.cells array index,
          so that each click will update that particular element inside the game.cells array.
  UI.js: added game logic into the onSuccess function.
          note: I attempted to keep the game logic in a separate file, but was not successful, since I'm not very familiar with require function.
  ui.js: blocked the rest of the game board after a player wins by deleting any           remaining buttons on the board.
          - done by using $('button').remove()
  Remaining issues:
      - reset entire board after clicking "play game" again.
        - this is the last challenging piece I have. Consider using $('.class').text() to clear out the Board
        - or reload the buttons. reloading the whole board will require re-attaching all event handlers again
        - This is mostly fixed by deleting the button completely, however I need to figure out how to reset the step variable in the app.js   file after I press the start game button again. Otherwise it sometimes starts with player_o.
      - hide or show apropriate tags using <class>.hide or .show.

## Day 1: set up API connection portion of the project

## Day 2: Start coding for game logic and DOM manipulation, later on message display via UI.
For the game board on html:

- User click "play button" - a new game ID is generated - done
- User click Grid 0 - game board object for that ID is updated
    - stuck here. waiting for help.
    - done as of Day 2 morning.
- Figure out how to click any button and change that button to a symbol of x or o - done

- Set up a gameboard with 9 divs - done
- Make each div clickable - done
- Make a x or o show up each time a div is clicked - done
- each click result changes the array content for that user.game.id - done

- JS work:
  - write the logic with given array - done
