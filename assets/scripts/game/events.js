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
  $('#divMove1').on('click', onUpdate)
  $('#divMove2').on('click', onUpdate2)
  $('#divMove3').on('click', onUpdate3)
  $('#divMove4').on('click', onUpdate4)
  $('#divMove5').on('click', onUpdate5)
  $('#divMove6').on('click', onUpdate6)
  $('#divMove7').on('click', onUpdate7)
  $('#divMove8').on('click', onUpdate8)
  $('#divMove9').on('click', onUpdate9)
}
module.exports = {
  addHandlers
}
