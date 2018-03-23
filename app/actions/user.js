export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function login(userCredentials) {
  if (userCredentials.username === 'bruna' && userCredentials.password === '123456') {
    return {
      type: LOGIN_SUCCESS,
      payload: true
    } 
  } else {
    return {
      type: LOGIN_ERROR,
      payload: "Ops, there was an error!"
    }
  }
}