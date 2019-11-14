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

  // const form = event.target
  // const formData = getFormFields(form)

  api.update()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
// list event listeners and event handlers below:
const addHandlers = event => {
  // $('#sign-up').on('submit', onSignUp)
  $('#create').on('submit', onCreate)
  $('#index').on('submit', onIndex)
  $('#show').on('submit', onShow)
  $('#update').on('submit', onUpdate)
}
module.exports = {
  addHandlers
}
