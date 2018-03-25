import { LOGIN_SUCCESS, USER_SIGNED_OUT, LOGIN_ERROR } from '../actions/user'

// const currentUserkey = 'closetApiJWT'
// const currentUserFromAsyncStorage = JSON.parse(
  
// )

export default (state = {}, { type, payload }) => {
  switch(type) {
    case LOGIN_SUCCESS:
      console.log('success', payload)
      return Object.assign({}, state, {
        currentUser: payload
      })

    case USER_SIGNED_OUT:
      return null

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