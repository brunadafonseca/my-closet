import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  ToolbarAndroid,
  StatusBar
} from 'react-native';
import { defaultStyles } from '../../App';

export default class Look extends Component {
  componentWillMount() {
    // this.getTime()
  }

  // componentDidMount() {
  //   Keyboard.dismiss()
  // }

  render() {    
    return (
      <View style={[defaultStyles.container, {alignContent: 'center', alignItems: 'center'}]}>
        <ToolbarAndroid
          style={styles.appToolbar}
          title="MyCloset"
          titleColor='#fff'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    
  },
  appToolbar: {
    width: '100%',
    height: 90,
    backgroundColor: '#3F4044',
  },
  headerText: {
    fontSize: 30,
  },
});