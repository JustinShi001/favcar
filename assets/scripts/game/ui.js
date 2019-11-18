'use strict'
const store = require('../store')
// const app = require('../app')
let counter = 0
// store.gameover = false // this is how you set up a global variable. use "store.step" to call it in any file.

const onSuccess = message => {
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').text(message)
  // can remove the the word 'message' and just connect the 3 dot commands in one line,
  // or chaining.
  $('form').trigger('reset')
}

const onEnding = message => {
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').text(message)
  store.game.over = true
  store.gameover = true
  console.log('the value of store.game.over is:', store.game.over)
  // can remove the the word 'message' and just connect the 3 dot commands in one line,
  // or chaining.
  // $('button').remove()
  counter = 0
}

const onInvalid = message => {
  $('#message').text(message)
}

const onInvalidSpace = () => {
  onInvalid('Invalid Cell. Please click an empty cell.')
}

const onFailure = message => {
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#message').text(message)
  $('form').trigger('reset')
}

const onCreateSuccess = (response) => {
  console.log('response from server is', response)
  store.game = response.game
  store.gameover = false
  store.step = 0
  // store.game.over = true
  console.log('this is the value of store.step', store.step)
  console.log(store.game.over)
  onSuccess('You successfully started a game')
  $('.container').show()
  // $('.before-auth').hide()
  $('p').remove()
  // app.step = 0 // this is not working. how to reset the step variable in the app.js file?
  // console.log('app.step =' app.step)
  // $('.container').append('<div class="row"><div id = "divMove1" class="col-6 col-md-4 box alt-color"><button id="buttonMove1"></button></div><div id = "divMove2" class="col-6 col-md-4 box alt-color"><button id="buttonMove2"></button></div><div id = "divMove3" class="col-6 col-md-4 box alt-color"><button id="buttonMove3"></button></div></div></div>')
  // $('.container').append('<div class="row"><div id = "divMove4" class="col-6 col-md-4 box alt-color"><button id="buttonMove4"></button></div><div id = "divMove5" class="col-6 col-md-4 box alt-color"><button id="buttonMove5"></button></div><div id = "divMove6" class="col-6 col-md-4 box alt-color"><button id="buttonMove6"></button></div></div></div>')
  // $('.container').append('<div class="row"><div id = "divMove7" class="col-6 col-md-4 box alt-color"><button id="buttonMove7"></button></div><div id = "divMove8" class="col-6 col-md-4 box alt-color"><button id="buttonMove8"></button></div><div id = "divMove9" class="col-6 col-md-4 box alt-color"><button id="buttonMove9"></button></div></div></div>')
  // // reattach click handlers
}

const onCreateFailure = (response) => {
  console.log('response from server is', response)
  onFailure('Rut roh... somgthing went wrong! try again')
}

const onIndexSuccess = (response) => {
  console.log('response from server is', response)
  onSuccess('You successfully displayed a game')
}
const onIndexFailure = (response) => {
  console.log('response from server is', response)
  onFailure('Rut roh... somgthing went wrong! try again')
}

const onShowSuccess = (response) => {
  store.game = response.game
  console.log('response from server is', response)
  onSuccess('You successfully displayed a game')
}
const onShowFailure = (response) => {
  console.log('response from server is', response)
  onFailure('Rut roh... somgthing went wrong! try again')
}
const onUpdateSuccess = (response) => {
  store.game = response.game
  counter++
  if (
    (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') ||
    (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') ||
    (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x') ||
    (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x') ||
    (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x') ||
    (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x') ||
    (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') ||
    (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x')
  ) {
    onEnding('Player_x wins!')
    console.log('Player_x wins!')
  } else if (
    (store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') ||
    (store.game.cells[3] === 'o' && store.game.cells[4] === 'o' && store.game.cells[5] === 'o') ||
    (store.game.cells[6] === 'o' && store.game.cells[7] === 'o' && store.game.cells[8] === 'o') ||
    (store.game.cells[0] === 'o' && store.game.cells[3] === 'o' && store.game.cells[6] === 'o') ||
    (store.game.cells[1] === 'o' && store.game.cells[4] === 'o' && store.game.cells[7] === 'o') ||
    (store.game.cells[2] === 'o' && store.game.cells[5] === 'o' && store.game.cells[8] === 'o') ||
    (store.game.cells[0] === 'o' && store.game.cells[4] === 'o' && store.game.cells[8] === 'o') ||
    (store.game.cells[2] === 'o' && store.game.cells[4] === 'o' && store.game.cells[6] === 'o')
  ) {
    onEnding('Player_o wins!')
    console.log('Player_o wins!')
  } else if (counter === 9) {
    onEnding('It is a draw!')
  } else if (counter % 2 !== 0) {
    onSuccess('It is player_o turn!')
  } else { onSuccess('It is player_x turn!') }
}
const onUpdateFailure = (response) => {
  onFailure('Rut roh... somgthing went wrong! try again')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onInvalidSpace
}
