'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

// below line is called document.ready.
// jQuery says I'm gonna wait til index.html is fully loaded, then run Javascript.
$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
})
