'user strict'
const store = require('./../store.js')

const createEntrySuccess = function (res) {
  store.entry = res.entry
  const entriesHtml = `
    <h4>${store.entry.symbol}</h4>
    <p>${store.entry.text}</p>
  `
  $('#entries-div').html(entriesHtml)
  $('#create-entry-form').trigger('reset')
}
const createEntryFail = function () {
  $('#modal-01-body').html('Failed to create new entry')
  $('#modal-01').modal('show')
}

const indexEntriesSuccess = function (res) {
  let entriesHtml = ''
  res.entries.forEach(function (entry) {
    entriesHtml += `
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card" style="width: 18rem;">
        <div class="card-header d-flex justify-content-end">
        <form class="dynamic-delete-entry" data-id=${entry._id}>
        <button class="dynamic-delete-entry" data-id=${entry._id}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button></form>
        <form class="dynamic-update-entry" data-id=${entry._id}>
          <button class="dynamic-update-entry"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
        </form>
        </div>

        <div class="card-body">
          <h5 class="card-title">${entry.symbol}</h5>
          <p class="card-text">${entry.text}</p>
          </div>
          </div>
        </div>
      </div>
  `
  })

  $('#entries-div-container').html(entriesHtml)
}
const indexEntriesFail = function () {
  $('#modal-01-body').html('Failed to find entries')
  $('#modal-01').modal('show')
}

const showEntrySuccess = function (res) {
  store.entry = res.entry
  // $('#entries-div').text(`${JSON.stringify(store.entry)}`)

  const entriesHtml = `
    <h4>${store.entry.symbol}</h4>
    <p>${store.entry.text}</p>
  `
  $('#entries-div').html(entriesHtml)
  $('#show-entry-form').trigger('reset')

  $('#change-password-div').hide()
  $('#create-entry-div').hide()
  $('#index-entry-div').hide()
}
const showEntryFail = function () {
  $('#modal-01-body').html('Failed to find any matching entries')
  $('#modal-01').modal('show')
}

const dynamicUpdateEntrySuccess = function (res) {
  $('#modal-01-body').html(`
    <form class="modal-update-entry" data-id=${res}>
      <input class="update-entry-text form-control mb-2" type="text" name="entry[text]" placeholder="text">
      <select id="symbols" name="entry[symbol]" class="form-control mb-2">
        <option value="-">- a note</option>
        <option value="*">* a task</option>
        <option value="+">+ an event</option>
        <option value=">">> a migrated task</option>
      </select>
      <button class="modal-update-entry btn-primary-1">Update Entry</button>
      </form>
    `)
  $('#modal-01-header').html(`
     <button type="button" class="modal-close" data-dismiss="modal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg></button>
    `)
  $('#modal-01-footer').html(``)
  $('#modal-01').modal('show')
  $('#update-entry-form').trigger('reset')
  $('#entries-div').trigger('reset')
}
const updateEntrySuccess = function () {
  $('#modal-01').modal('hide')
  $('#index-entries-button').click()
}
const updateEntryFail = function () {
  $('#modal-01-body').html('Failed to update entry')
  $('#modal-01').modal('show')
}

const deleteEntrySuccess = function () {
  $('#modal-01-body').html('Entry successfully deleted')
  $('#modal-01').modal('show')
  $('#delete-entry-form').trigger('reset')
  $('#entries-div').trigger('reset')
}
const deleteEntryFail = function () {
  $('#modal-01-body').html('Failed to delete entry')
  $('#modal-01').modal('show')
}

const navCreateEntry = function () {
  $('#change-password-div').hide()
  $('#index-entry-div').hide()
  $('#create-entry-div').show()
}

const navIndexEntries = function () {
  $('#change-password-div').hide()
  $('#create-entry-div').hide()
  $('#index-entry-div').show()
}

const updateEntryModal = function () {
  $('#modal-01-body').html('Failed to delete entry')
  $('#modal-01').modal('show')
}

module.exports = {
  createEntrySuccess,
  createEntryFail,
  indexEntriesSuccess,
  indexEntriesFail,
  showEntrySuccess,
  showEntryFail,
  dynamicUpdateEntrySuccess,
  updateEntryFail,
  deleteEntrySuccess,
  deleteEntryFail,
  navCreateEntry,
  navIndexEntries,
  updateEntryModal,
  updateEntrySuccess
}
