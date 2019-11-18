'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let player = 'x'

const onCreate = event => {
  event.preventDefault()
  console.log('onPlay')

  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
  // console.log(ui.onCreateSuccess())
}

const onIndex = event => {
  event.preventDefault()
  console.log('onIndex')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShow = event => {
  event.preventDefault()
  console.log('onIndex')

  // const form = event.target
  // const formData = getFormFields(form)

  api.index()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}
// let step = 0
// see if the game is over or not, and assign different actions based on status
const onUpdate = event => {
  event.preventDefault()
  console.log('onUpdate')
  console.log('the value of store.gameover is:', store.gameover)

  if ($(event.target).html() === '<p>x</p>' || $(event.target).html() === '<p>o</p>') {
    console.log('Invalid cell. click another cell')
    ui.onInvalidSpace()
  } else if (store.gameover === false) {
    if (store.step % 2 === 0) {
      console.log('the value of this cell is', $(event.target).html())
      $(event.target).append('<p>x</p>')
      console.log('this is the value of store.step', store.step)
      console.log('the value of this cell is', $(event.target).html())
      store.step++
      player = 'x'
      const index = $(event.target).data('square')
      api.update(index, player)
        .then(ui.onUpdateSuccess)
        .catch(ui.onUpdateFailure)
    } else {
      console.log('the value of this cell is', $(event.target).html())
      $(event.target).append('<p>o</p>')
      console.log('the value of this cell is', $(event.target).html())
      store.step++
      player = 'o'
      const index = $(event.target).data('square')
      api.update(index, player)
        .then(ui.onUpdateSuccess)
        .catch(ui.onUpdateFailure)
    }
  }
}

// list event listeners and event handlers below:
const addHandlers = event => {
  // $('#sign-up').on('submit', onSignUp)
  $('#create').on('submit', onCreate)
  $('#index').on('submit', onIndex)
  $('#show').on('submit', onShow)
  $('.box').on('click', onUpdate)
}
module.exports = {
  addHandlers
}
