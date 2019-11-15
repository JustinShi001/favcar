'use strict'

const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields.js')

const onCreate = event => {
  event.preventDefault()
  console.log('onPlay')

  // const form = event.target
  // const formData = getFormFields(form)

  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
  console.log(ui.onCreateSuccess())
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

const onUpdate = event => {
  event.preventDefault()
  console.log('onUpdate')
  api.update()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onUpdate2 = event => {
  event.preventDefault()
  console.log('onUpdate')
  api.update2()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onUpdate3 = event => {
  event.preventDefault()
  console.log('onUpdate')
  api.update3()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
const onUpdate4 = event => {
  event.preventDefault()
  console.log('onUpdate')
  api.update4()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
const onUpdate5 = event => {
  event.preventDefault()
  console.log('onUpdate')
  api.update5()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
const onUpdate6 = event => {
  event.preventDefault()
  console.log('onUpdate')
  api.update6()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
const onUpdate7 = event => {
  event.preventDefault()
  console.log('onUpdate')
  api.update7()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
const onUpdate8 = event => {
  event.preventDefault()
  console.log('onUpdate')
  api.update8()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
const onUpdate9 = event => {
  event.preventDefault()
  console.log('onUpdate')
  api.update9()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
// list event listeners and event handlers below:
const addHandlers = event => {
  // $('#sign-up').on('submit', onSignUp)
  $('#create').on('submit', onCreate)
  $('#index').on('submit', onIndex)
  $('#show').on('submit', onShow)
  // $('#update').on('submit', onUpdate)
  $('#buttonMove1').on('click', onUpdate)
  $('#buttonMove2').on('click', onUpdate2)
  $('#buttonMove3').on('click', onUpdate3)
  $('#buttonMove4').on('click', onUpdate4)
  $('#buttonMove5').on('click', onUpdate5)
  $('#buttonMove6').on('click', onUpdate6)
  $('#buttonMove7').on('click', onUpdate7)
  $('#buttonMove8').on('click', onUpdate8)
  $('#buttonMove9').on('click', onUpdate9)
}
module.exports = {
  addHandlers
}
