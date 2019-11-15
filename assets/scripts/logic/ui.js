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
  console.log('store.game is ', store.game)
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
  console.log('response from server is', response)
  onSuccess('You successfully displayed a game')
}
const onShowFailure = (response) => {
  console.log('response from server is', response)
  onFailure('Rut roh... somgthing went wrong! try again')
}

const onUpdateSuccess = (response) => {
  console.log('response from server is', response)
  onSuccess('You successfully updated a game')
}
const onUpdateFailure = (response) => {
  console.log('response from server is', response)
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
