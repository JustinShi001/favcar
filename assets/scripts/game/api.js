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

let step = 1

const update = () => {
  if (step % 2 !== 0) {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 0, 'value': 'x'}, 'over': false}}
    })
  } else {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 0, 'value': 'o'}, 'over': false}}
    })
  }
}

const update2 = () => {
  if (step % 2 !== 0) {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 1, 'value': 'x'}, 'over': false}}
    })
  } else {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 1, 'value': 'o'}, 'over': false}}
    })
  }
}

const update3 = () => {
  if (step % 2 !== 0) {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 2, 'value': 'x'}, 'over': false}}
    })
  } else {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 2, 'value': 'o'}, 'over': false}}
    })
  }
}

const update4 = () => {
  if (step % 2 !== 0) {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 3, 'value': 'x'}, 'over': false}}
    })
  } else {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 3, 'value': 'o'}, 'over': false}}
    })
  }
}

const update5 = () => {
  if (step % 2 !== 0) {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 4, 'value': 'x'}, 'over': false}}
    })
  } else {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 4, 'value': 'o'}, 'over': false}}
    })
  }
}
const update6 = () => {
  if (step % 2 !== 0) {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 5, 'value': 'x'}, 'over': false}}
    })
  } else {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 5, 'value': 'o'}, 'over': false}}
    })
  }
}
const update7 = () => {
  if (step % 2 !== 0) {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 6, 'value': 'x'}, 'over': false}}
    })
  } else {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 6, 'value': 'o'}, 'over': false}}
    })
  }
}
const update8 = () => {
  if (step % 2 !== 0) {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 7, 'value': 'x'}, 'over': false}}
    })
  } else {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 7, 'value': 'o'}, 'over': false}}
    })
  }
}
const update9 = () => {
  if (step % 2 !== 0) {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 8, 'value': 'x'}, 'over': false}}
    })
  } else {
    step++
    return $.ajax({
      url: config.apiUrl + '/games' + '/' + store.game.id,
      method: 'PATCH',
      headers: {Authorization: `Token token=${store.user.token}`, id: `ID=${store.game.id}`},
      data: {'game': {'cell': {'index': 8, 'value': 'o'}, 'over': false}}
    })
  }
}
module.exports = {
  create,
  index,
  show,
  update,
  update2,
  update3,
  update4,
  update5,
  update6,
  update7,
  update8,
  update9
}
