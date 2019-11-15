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
