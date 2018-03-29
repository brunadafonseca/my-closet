import ApiClient from '../api/client'
import { Actions } from 'react-native-router-flux'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

const api = new ApiClient()

export function signUp(newUser) {
  return dispatch => {
    api.post('users', newUser)
      .then((res) => {
        dispatch(signIn(newUser))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function signIn({email, password}) {
  return dispatch => {
    api.authenticate(email, password)
      .then((res) => {
        const jwt = res.body.token

        api.storeToken(jwt)

        Actions.home()

        return api.get('users/me')
      })
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.body })
      })
      .catch((err) => {
        console.log('login error:', err.message)
        dispatch({ type: LOGIN_ERROR, payload: err.message})
      })
  } 
}

export function signOut() {
  return dispatch => {
    api.removeToken()
      .then((res) => {
        Actions.signIn()
      })
  }
}