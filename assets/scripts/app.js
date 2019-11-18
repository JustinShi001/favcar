'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// const store = require('./store')

// const logicEvents = require('./logic/events')

// use require without a reference to ensure a file is bundled
// require('./example')

// below line is called document.ready.
// jQuery says I'm gonna wait til index.html is fully loaded, then run Javascript.

// count number of steps. If step = odd, put x on board.
// if step = even, put o on board.

// let step = 0
// const gameOver = {
//   false: false,
//   true: true
// }
$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
})
  // console.log(store.game.over)
  // if (store.game.over) {
  //   // $('#divMove1').on('click', function (event) {
  //   // })
  //   $('#divMove2').on('click', function (event) {
  //     if (step % 2 === 0) {
  //       $('#divMove2').append('<p>x</p>')
  //       step++
  //     } else {
  //       $('#divMove2').append('<p>o</p>')
  //       step++
  //     }
  //   })
  //   $('#divMove3').on('click', function (event) {
  //     if (step % 2 === 0) {
  //       $('#divMove3').append('<p>x</p>')
  //       step++
  //     } else {
  //       $('#divMove3').append('<p>o</p>')
  //       step++
  //     }
  //   })
  //   $('#divMove4').on('click', function (event) {
  //     if (step % 2 === 0) {
  //       $('#divMove4').append('<p>x</p>')
  //       step++
  //     } else {
  //       $('#divMove4').append('<p>o</p>')
  //       step++
  //     }
  //   })
  //   $('#divMove5').on('click', function (event) {
  //     if (step % 2 === 0) {
  //       $('#divMove5').append('<p>x</p>')
  //       step++
  //     } else {
  //       $('#divMove5').append('<p>o</p>')
  //       step++
  //     }
  //   })
  //   $('#divMove6').on('click', function (event) {
  //     if (step % 2 === 0) {
  //       $('#divMove6').append('<p>x</p>')
  //       step++
  //     } else {
  //       $('#divMove6').append('<p>o</p>')
  //       step++
  //     }
  //   })
  //   $('#divMove7').on('click', function (event) {
  //     if (step % 2 === 0) {
  //       $('#divMove7').append('<p>x</p>')
  //       step++
  //     } else {
  //       $('#divMove7').append('<p>o</p>')
  //       step++
  //     }
  //   })
  //   $('#divMove8').on('click', function (event) {
  //     if (step % 2 === 0) {
  //       $('#divMove8').append('<p>x</p>')
  //       step++
  //     } else {
  //       $('#divMove8').append('<p>o</p>')
  //       step++
  //     }
  //   })
  //   $('#divMove9').on('click', function (event) {
  //     if (step % 2 === 0) {
  //       $('#divMove9').append('<p>x</p>')
  //       step++
  //     } else {
  //       $('#divMove9').append('<p>o</p>')
  //       step++
  //     }
  //   })
  // }


// module.exports = step
