'use strict'
const store = require('../store')

const onSuccess = message => {
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').text(message)
  // can remove the the word 'message' and just connect the 3 dot commands in one line,
  // or chaining.
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#message').text(message)
  $('form').trigger('reset')
}

const onCreateSuccess = (response) => {
  store.game = response.game
  console.log('response from server is', response)
  onSuccess('You successfully started a game')
  $('.after-auth').show()
  $('.before-auth').hide()
  console.log('store.game.cells is ', store.game.cells)
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
let step = 0
const onUpdateSuccess = (response) => {
  store.game = response.game
  step++
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
    onSuccess('Player_x wins!')
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
    onSuccess('Player_o wins!')
    console.log('Player_o wins!')
  } else if (step % 2 !== 0) {
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
  onUpdateFailure
}
