'use strict'
const store = require('./store')
const winX = function () {
  return (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') ||
  (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') ||
  (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x') ||
  (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x') ||
  (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x') ||
  (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x') ||
  (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') ||
  (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x')
}
module.exports = {
  winX
}






// refer to the mbta question to refresh memory on arrays.
// load each move into testArray
// testArray = game.array[]

// const testArray = ['x', 'x', 'x', '', 'o', 'o', 'x', 'o', '']
// console.log(testArray[0])

// console.log('store.game.cells is ', store.game.cells)
// store.winX = false
// store.winO = false
// const result = function () {
//   if (
//     (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') ||
//   (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') ||
//   (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x') ||
//   (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x') ||
//   (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x') ||
//   (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x') ||
//   (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') ||
//   (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x')
//   ) {
//     store.winX = true
//     console.log('store.winX value is', store.winX)
//   } else if (store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') {
//     store.winO = true
//   }
// }

// const message = result()
