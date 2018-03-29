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
} from 'react-native';
import { defaultStyles } from '../../App';
import { Feather } from '@expo/vector-icons'
import { Actions } from 'react-native-router-flux'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hour: null,
    }
  }

  componentWillMount() {
    this.getTime()
    // navigator.geolocation.getCurrentPosition(
    //   (pos) => {
    //     let initialPosition = JSON.stringify(position)
    //     console.log(initialPosition)
    //     this.setState({initialPosition})
    //   },
    //   (err) => {
    //     alert(JSON.stringify(err))
    //   }
    // )
  }

  componentDidMount() {
    Keyboard.dismiss()
  }

  getTime() {
    const today = new Date();
    const hour = today.getHours()
    
    this.setState({
      hour,
    })
  }

  renderSalutation() {
    const { hour } = this.state
    const { name } = this.props.currentUser
    
    let salutation

    if (hour > 5 && hour < 12) {
      salutation = 'Good morning, '
    }

    if (hour > 12 && hour < 18) {
      salutation = 'Good afternoon, '
    }

    if (hour > 18 || hour < 5) {
      salutation = 'Good evening, '
    }

    return(
      <Text style={defaultStyles.boldText}>
        {salutation + name}
      </Text>
    )
  }

  render() {    
    return (
      <View style={[defaultStyles.container, {alignContent: 'center', alignItems: 'center'}]}>
        <ToolbarAndroid
          style={styles.appToolbar}
          title="MyCloset"
          titleColor='#fff'
        />

        {this.renderSalutation()}

        <TouchableOpacity
          onPress={Actions.cameraScreen}
        >
          <View style={styles.actionsAdd}>
            <Feather name="camera" size={30} color='#fff' />
          </View>
        </TouchableOpacity>
      </View>
    );
  }ß
}

const mapStateToProps = state => ({ 
  currentUser: state.currentUser,
})

export default connect(mapStateToProps)(Home)

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