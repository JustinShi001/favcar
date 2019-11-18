

day3-5pm:

The following is working now:
-Display an error message when user clicked on an occupied cell.
- show or hide certain elements (using .class {display: none} in css)
- find the bug - bug was solved by rerunning "grunt serve"

Todos:

- update game.over to true at end of game.
- make the display a game button work.

day3-3pm:
Solved most remaining issues, including:

- restart a new game and reset which player's turn it is (global variable)
- blocked cells after game has ended;
- Make cells unclickable after it has been occupied (by using jquery)
  $('event.target').html()

Explain the project here.


JS logic

Take formData

Then store board results as an array each time a player plays a step.

Check if one player won using a logic.

Coding schedule:
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
  - write the logic with given array.

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
        note: I attempted to to keep the game logic in a separate file, but was not successful,
        since I'm not very familiar with require function.
ui.js: blocked the rest of the game board after a player wins by deleting any remaining buttons on the board.
        - done by using $('button').remove()
Remaining issues:
    - reset entire board after clicking "play game" again.
      - this is the last challenging piece I have. Consider using $('.class').text() to clear out the Board
      - or reload the buttons. reloading the whole board will require re-attaching all event handlers again
      - This is mostly fixed by deleting the button completely, however I need to figure out how to reset the step variable in the app.js   file after I press the start game button again. Otherwise it sometimes starts with player_o.
    - hide or show apropriate tags using <class>.hide or .show.
