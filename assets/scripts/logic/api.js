'use strict'

const store = require('../store')
const config = require('../config')
const ui = require('./ui')

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

const update = (gameBoard) => {
  console.log('inside update...formData is', gameBoard)
  return $.ajax({
    url: config.apiUrl + '/games' + '/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
      id: `ID=${store.game.id}`
    },
    data: {
      'game': {
        'cell': {
          'index': 0,
          'value': 'o'
        },
        'over': false
      }
    }
  })
}

module.exports = {
  create,
  index,
  show,
  update
}
