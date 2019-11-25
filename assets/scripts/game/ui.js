'use strict'
const store = require('../store')
const api = require('./api')
const gameLogic = require('../logic')
let counter = 0

const onSuccess = (gameMessage) => {
  $('#gameMessage').removeClass('failure')
  $('#gameMessage').addClass('success')
  $('#gameMessage').text(gameMessage)
  $('form').trigger('reset')
}

const onEnding = gameMessage => {
  $('#gameMessage').removeClass('failure')
  $('#gameMessage').addClass('success')
  $('#gameMessage').text(gameMessage)
  store.game.over = true
  store.gameover = true
  counter = 0
  api.updateGameStatus()
}

const onInvalid = gameMessage => {
  $('#gameMessage').text(gameMessage)
}

const onInvalidSpace = () => {
  onInvalid('Invalid Cell. Please click an empty cell.')
}

const onFailure = gameMessage => {
  $('#gameMessage').removeClass('success')
  $('#gameMessage').addClass('failure')
  $('#gameMessage').text(gameMessage)
  $('form').trigger('reset')
}

const onCreateSuccess = (response) => {
  store.game = response.game
  store.gameover = false
  store.step = 0
  counter = 0
  onSuccess('You successfully started a game')
  $('.container').show()
  $('p').remove()
  $('.box').addClass('alt-color')
}

const onCreateFailure = (response) => {
  onFailure('Rut roh... somgthing went wrong! try again')
}

const onIndexSuccess = (response) => {
  onSuccess('You successfully displayed a game')
}
const onIndexFailure = (response) => {
  onFailure('Rut roh... somgthing went wrong! try again')
}

const onShowSuccess = (response) => {
  store.games = response.games
  onSuccess(store.games.length)
}
const onShowFailure = (response) => {
  onFailure('Rut roh... somgthing went wrong! try again')
}
const onUpdateSuccess = (response, box) => {
  store.game = response.game
  box.removeClass('alt-color')
  counter++
  if (
    gameLogic.winX()
  ) {
    onEnding('Player_x wins!')
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
