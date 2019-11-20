'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
})
//
// $(() => {
//   let currentPlayer = '✕'
//   const onBoxClick = (event) => {
//     console.log('click')
//     const $box = $(event.target)
//     currentPlayer = currentPlayer === '○' ? '✕' : '○'
//     $box.css('background', 'transparent').text(currentPlayer)
//   }
//   $('.box').on('click', onBoxClick)
// })
