'use strict'

const store = require('../store')
const config = require('../config')

const create = formData => {
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

const update = (index, player) => {
  return $.ajax({
    url: config.apiUrl + '/games' + '/' + store.game.id,
    method: 'PATCH',
    headers: {Authorization: `Token token=${store.user.token}`},
    data: {'game': {'cell': {'index': index, 'value': player}, 'over': store.game.over}}
  })
}

const updateGameStatus = () => {
  return $.ajax({
    url: config.apiUrl + '/games' + '/' + store.game.id,
    method: 'PATCH',
    headers: {Authorization: `Token token=${store.user.token}`},
    data: {'game': {'over': true}}
  })
}
module.exports = {
  create,
  index,
  show,
  update,
  updateGameStatus
}
