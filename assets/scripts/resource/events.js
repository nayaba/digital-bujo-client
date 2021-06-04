'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreateEntry = function (event) {
  event.preventDefault()
  api.createEntry(getFormFields(event.target))
    .then(ui.createEntrySuccess)
    .catch(ui.createEntryFail)
}

const onIndexEntries = function (event) {
  event.preventDefault()
  api.indexEntries()
    .then(ui.indexEntriesSuccess)
    .catch(ui.indexEntriesFail)
}

const onShowEntry = function (event) {
  event.preventDefault()
  api.showEntry(getFormFields(event.target))
    .then(ui.showEntrySuccess)
    .catch(ui.showEntryFail)
}

const onUpdateEntry = function (event) {
  event.preventDefault()
  api.updateEntry(getFormFields(event.target))
    .then(ui.updateEntrySuccess)
    .catch(ui.updateEntryFail)
}

const onDeleteEntry = function (event) {
  event.preventDefault()
  api.deleteEntry(getFormFields(event.target))
    .then(ui.deleteEntrySuccess)
    .catch(ui.deleteEntryFail)
}

module.exports = {
  onCreateEntry,
  onIndexEntries,
  onShowEntry,
  onUpdateEntry,
  onDeleteEntry
}
