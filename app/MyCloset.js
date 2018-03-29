import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import SignUp from './screens/SignUp'
import SignIn from './screens/SignIn'
import Home from './screens/Home'
import { Font } from 'expo'

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'nunito': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf')
    })
  }

  getLooks() {
    // this.props.getLooks()
  }

  render() {
    return (
      <Scene key='root'>
        <Scene key="signIn" component={SignIn} hideNavBar={true} initial={true} />
        <Scene key="signUp" component={SignUp} hideNavBar={true} />
        <Scene key="home" component={Home} hideNavBar={true} />
      </Scene>
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