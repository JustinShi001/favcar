'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// const logicEvents = require('./logic/events')

// use require without a reference to ensure a file is bundled
// require('./example')

// below line is called document.ready.
// jQuery says I'm gonna wait til index.html is fully loaded, then run Javascript.

// count number of steps. If step = odd, put x on board.
// if step = even, put o on board.
let step = 1
$(() => {
  $('#buttonMove1').on('click', function (event) {
    $('#buttonMove1').remove()
    if (step % 2 !== 0) {
      $('#divMove1').append('<p>x</p>')
      step++
    } else {
      $('#divMove1').append('<p>o</p>')
      step++
    }
  })
  $('#buttonMove2').on('click', function (event) {
    $('#buttonMove2').remove()
    if (step % 2 !== 0) {
      $('#divMove2').append('<p>x</p>')
      step++
    } else {
      $('#divMove2').append('<p>o</p>')
      step++
    }
  })
  $('#buttonMove3').on('click', function (event) {
    $('#buttonMove3').remove()
    if (step % 2 !== 0) {
      $('#divMove3').append('<p>x</p>')
      step++
    } else {
      $('#divMove3').append('<p>o</p>')
      step++
    }
  })
  $('#buttonMove4').on('click', function (event) {
    $('#buttonMove4').remove()
    if (step % 2 !== 0) {
      $('#divMove4').append('<p>x</p>')
      step++
    } else {
      $('#divMove4').append('<p>o</p>')
      step++
    }
  })
  $('#buttonMove5').on('click', function (event) {
    $('#buttonMove5').remove()
    if (step % 2 !== 0) {
      $('#divMove5').append('<p>x</p>')
      step++
    } else {
      $('#divMove5').append('<p>o</p>')
      step++
    }
  })
  $('#buttonMove6').on('click', function (event) {
    $('#buttonMove6').remove()
    if (step % 2 !== 0) {
      $('#divMove6').append('<p>x</p>')
      step++
    } else {
      $('#divMove6').append('<p>o</p>')
      step++
    }
  })
  $('#buttonMove7').on('click', function (event) {
    $('#buttonMove7').remove()
    if (step % 2 !== 0) {
      $('#divMove7').append('<p>x</p>')
      step++
    } else {
      $('#divMove7').append('<p>o</p>')
      step++
    }
  })
  $('#buttonMove8').on('click', function (event) {
    $('#buttonMove8').remove()
    if (step % 2 !== 0) {
      $('#divMove8').append('<p>x</p>')
      step++
    } else {
      $('#divMove8').append('<p>o</p>')
      step++
    }
  })
  $('#buttonMove9').on('click', function (event) {
    $('#buttonMove9').remove()
    if (step % 2 !== 0) {
      $('#divMove9').append('<p>x</p>')
      step++
    } else {
      $('#divMove9').append('<p>o</p>')
      step++
    }
  })
  authEvents.addHandlers()
  gameEvents.addHandlers()
  // logicEvents.addHandlers()
})
