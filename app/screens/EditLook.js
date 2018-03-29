import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  CameraRoll,
  Image,
  Dimensions,
} from 'react-native';
import { defaultStyles } from '../../App';
import { Feather } from '@expo/vector-icons'
import { Camera, Permissions } from 'expo'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class EditLook extends Component {
  render() {    
    return (
      <View style={defaultStyles.container}>
        <Image
          style={{width: WIDTH, height: HEIGHT - 200}}
          source={{uri: this.props.uri}}
        />
        <Text>Edit picture</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionsAdd: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
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