import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Scene } from 'react-native-router-flux'

import SignUp from './app/screens/SignUp'
import SignIn from './app/screens/SignIn'
import Home from './app/screens/Home'
import CameraScreen from './app/screens/Camera'
import EditLook from './app/screens/EditLook'

import { Font } from 'expo'

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'nunito': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf')
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root'>
            <Scene key="signIn" component={SignIn} hideNavBar initial />
            <Scene key="signUp" component={SignUp} hideNavBar />
            <Scene key="home" component={Home} hideNavBar />
            <Scene key="cameraScreen" component={CameraScreen} hideNavBar />
            <Scene key="editLook" component={EditLook} hideNavBar />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'nunito'
  },
  regularText: {
    fontSize: 18,
    fontFamily: 'nunito'
  },
  boldText: {
    fontSize: 18,
    fontFamily: 'nunito-bold'
  }
});