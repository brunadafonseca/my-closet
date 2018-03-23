import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/user'

const INITIAL_STATE = {
  loggedIn: false,
  errorMessage: null,
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case LOGIN_SUCCESS:
      console.log('success', payload)
      return Object.assign({}, state, {
        loggedIn: payload
      })

    case LOGIN_ERROR:
      console.log('error', payload)
      return Object.assign({}, state, {
        errorMessage: payload
      })

    default:
     return state
  }
  return state
}