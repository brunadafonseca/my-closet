import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'
import { login } from './app/actions/user'
import store from './store'
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import SignIn from './app/screens/SignIn'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root'>
            <Scene key="signIn" component={SignIn} initial={true} hideNavBar={true} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}