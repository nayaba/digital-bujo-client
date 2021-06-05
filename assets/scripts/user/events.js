'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  api.signUp(getFormFields(event.target))
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  api.signIn(getFormFields(event.target))
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  api.changePassword(getFormFields(event.target))
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut(event.target)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

// hide sign in div
const onSignUpLink = function (event) {
  event.preventDefault()
  ui.signUpLinkSuccess()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSignUpLink
}
