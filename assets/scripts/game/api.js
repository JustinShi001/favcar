'use strict'

const store = require('../store')
const config = require('../config')
// const logic = require('../logic')
// const ui = require('./ui')
// const app = require('../app')

const create = formData => {
  console.log('inside create...formData is', formData)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const index = formData => {
  console.log('inside index...formData is', formData)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const show = formData => {
  console.log('inside index...formData is', formData)
  return $.ajax({
    url: config.apiUrl + '/games' + '/' + store.game.id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
      id: `ID=${store.game.id}`
    },
    data: formData
  })
}

// let step = 1

const update = (index, player) => {
  // if (step % 2 !== 0) {
  //   step++
  return $.ajax({
    url: config.apiUrl + '/games' + '/' + store.game.id,
    method: 'PATCH',
    headers: {Authorization: `Token token=${store.user.token}`},
    data: {'game': {'cell': {'index': index, 'value': player}, 'over': store.game.over}}
  })
}

const updateGameStatus = () => {
  // if (step % 2 !== 0) {
  //   step++
  return $.ajax({
    url: config.apiUrl + '/games' + '/' + store.game.id,
    method: 'PATCH',
    headers: {Authorization: `Token token=${store.user.token}`},
    data: {'game': {'over': true}}
  })
}

// const update2 = () => {
//   if (step % 2 !== 0) {
//     step++
//     return $.ajax({
//       url: config.apiUrl + '/games' + '/' + store.game.id,
//       method: 'PATCH',
//       headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
//       data: {'game': {'cell': {'index': 1, 'value': 'x'}, 'over': false}}
//     })
//   } else {
//     step++
//     return $.ajax({
//       url: config.apiUrl + '/games' + '/' + store.game.id,
//       method: 'PATCH',
//       headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
//       data: {'game': {'cell': {'index': 1, 'value': 'o'}, 'over': false}}
//     })
//   }
// }
//
module.exports = {
  create,
  index,
  show,
  update,
  updateGameStatus
}
