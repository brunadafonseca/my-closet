import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
  StatusBar,
  CameraRoll,
} from 'react-native';
import { defaultStyles } from '../../App';
import { Feather } from '@expo/vector-icons'
import { Camera, Permissions } from 'expo'
import { Actions } from 'react-native-router-flux'

export default class CameraScreen extends Component {
  
  takePicture = async () => {
    if (this.camera) {
      const options = { base64: true }
      let photo = await this.camera.takePictureAsync(options)
      let permission = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL)

      if (permission.status === 'granted') {
        CameraRoll.saveToCameraRoll(photo.uri, "photo")
      }

      Actions.editLook({uri: photo.uri})
    }
  }

  render() {    
    return (
      <View style={{ flex: 1 }}>
        <Camera ref={ref => { this.camera = ref; }} style={{flex: 1}} >
          <View>
            <TouchableOpacity
              style={styles.actionsAdd}
              onPress={this.takePicture}
            >

            </TouchableOpacity>
          </View>
        </Camera>
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