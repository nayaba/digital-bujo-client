'user strict'
const store = require('./../store.js')

const createEntrySuccess = function (res) {
  store.entry = res.entry
  // need to refactor this into something legible in the future
  $('#entries-div').text(`${JSON.stringify(store.entry)}`)
}
const createEntryFail = function () {
  $('#messaging').text('Failed to create new entry')
}

const indexEntriesSuccess = function (res) {
  store.entries = res.entries
  $('#entries-div').text(`${JSON.stringify(store.entries)}`)
}
const indexEntriesFail = function () {
  $('#messaging').text('Failed to find entries')
}

const showEntrySuccess = function (res) {
  store.entry = res.entry
  $('#entries-div').text(`${JSON.stringify(store.entry)}`)
}
const showEntryFail = function () {
  $('#messaging').text('Failed to find entry')
}

const updateEntrySuccess = function (res) {
  $('#messaging').text('successfully updated entry')
}
const updateEntryFail = function () {
  $('#messaging').text('Failed to update entry')
}

module.exports = {
  createEntrySuccess,
  createEntryFail,
  indexEntriesSuccess,
  indexEntriesFail,
  showEntrySuccess,
  showEntryFail,
  updateEntrySuccess,
  updateEntryFail
}
