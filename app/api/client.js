import request from 'superagent'
import { AsyncStorage } from 'react-native'

export default class ApiClient {
  defaultOptions = {
    tokenStorageKey: 'closetApiJWT'
  }

  constructor(host, options = {}, token) {
    this.host = 'http://192.168.178.206:3030'
    this.options = { ...this.defaultOptions, ...options }
    this.token = null
  }

  get(path) {
    return request
      .get(this.createUrl(path))
      .set(this.headers())
  }

  post(path, data = {}) {
    return request
      .post(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }
  
  createUrl(path) {
    return [this.host, path].join('/')
  }

  headers() {
    this.getToken()

    let headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`
    }
  
    return headers
  }

  authenticate(email, password) {
    return this.post('sessions', { email, password })
  }

  isAuthenticated() {
    return !!this.getToken()
  }

  storeToken(token) {
    AsyncStorage.setItem(this.options.tokenStorageKey, token)
  }

  getToken() {
    AsyncStorage.getItem(this.options.tokenStorageKey)
     .then((res) => {
        this.token = res
     })
     .catch((err) => {
       console.log(err.message)
     })
  }
}