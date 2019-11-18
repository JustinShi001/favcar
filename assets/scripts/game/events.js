'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// const getFormFields = require('../../../lib/get-form-fields.js')
let player = 'x'

const onCreate = event => {
  event.preventDefault()
  console.log('onPlay')

  // const form = event.target
  // const formData = getFormFields(form)

  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
  // console.log(ui.onCreateSuccess())
}

const onIndex = event => {
  event.preventDefault()
  console.log('onIndex')

  // const form = event.target
  // const formData = getFormFields(form)

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
  // display "please click an empty cell" through ui.js if the cell is not empty

  // console.log('the length of this cell is', $(event.target).length)

  if ($(event.target).html() === '<p>x</p>' || $(event.target).html() === '<p>o</p>') {
    console.log('Invalid cell. click another cell')
    // ui.onInvalidSpace()
  } else if (store.gameover === false) {
    if (store.step % 2 === 0) {
      console.log('the value of this cell is', $(event.target).html())
      $(event.target).append('<p>x</p>')
      console.log('this is the value of store.step', store.step)
      console.log('the value of this cell is', $(event.target).html())
      store.step++
      player = 'x'
    } else {
      console.log('the value of this cell is', $(event.target).html())
      $(event.target).append('<p>o</p>')
      console.log('the value of this cell is', $(event.target).html())
      store.step++
      player = 'o'
    }
  }
  console.log('this is the value of player ', player)
  const index = $(event.target).data('square')
  console.log('this is the value of index', index)

  api.update(index, player)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

// const onUpdate2 = event => {
//   event.preventDefault()
//   console.log('onUpdate')
//   api.update2()
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }
//
// const onUpdate3 = event => {
//   event.preventDefault()
//   console.log('onUpdate')
//   api.update3()
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }
// const onUpdate4 = event => {
//   event.preventDefault()
//   console.log('onUpdate')
//   api.update4()
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }
// const onUpdate5 = event => {
//   event.preventDefault()
//   console.log('onUpdate')
//   api.update5()
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }
// const onUpdate6 = event => {
//   event.preventDefault()
//   console.log('onUpdate')
//   api.update6()
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }
// const onUpdate7 = event => {
//   event.preventDefault()
//   console.log('onUpdate')
//   api.update7()
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }
// const onUpdate8 = event => {
//   event.preventDefault()
//   console.log('onUpdate')
//   api.update8()
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }
// const onUpdate9 = event => {
//   event.preventDefault()
//   console.log('onUpdate')
//   api.update9()
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }
// list event listeners and event handlers below:
const addHandlers = event => {
  // $('#sign-up').on('submit', onSignUp)
  $('#create').on('submit', onCreate)
  $('#index').on('submit', onIndex)
  $('#show').on('submit', onShow)
  // $('#update').on('submit', onUpdate)
  $('.box').on('click', onUpdate)
  // $('#divMove2').on('click', onUpdate2)
  // $('#divMove3').on('click', onUpdate3)
  // $('#divMove4').on('click', onUpdate4)
  // $('#divMove5').on('click', onUpdate5)
  // $('#divMove6').on('click', onUpdate6)
  // $('#divMove7').on('click', onUpdate7)
  // $('#divMove8').on('click', onUpdate8)
  // $('#divMove9').on('click', onUpdate9)
}
module.exports = {
  addHandlers
}
