'use strict'
const store = require('./store')

// refer to the mbta question to refresh memory on arrays.
// load each move into testArray
// testArray = game.array[]

// const testArray = ['x', 'x', 'x', '', 'o', 'o', 'x', 'o', '']
// console.log(testArray[0])

// console.log('store.game.cells is ', store.game.cells)

const result = function () {
  if (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') {
    console.log('player1 wins!')
  } else if (store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') {
    console.log('player2 wins!')
  }
}

// const message = result()
console.log(result())
