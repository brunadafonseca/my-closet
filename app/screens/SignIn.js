import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signIn } from '../actions/user'
import { Actions } from 'react-native-router-flux'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
import { defaultStyles } from '../../App.js'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
    }
  }

  componentWillMount() {
    const user = {
      email: 'bartsunter',
      password: 'cuzao'
    }

    this.props.signIn(user)
  }

  clearForm() {
    this.setState({
      email: null,
      password: null,
    })
  }

  handleSubmit = () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.signIn(user)
    this.clearForm()
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <ImageBackground 
          source={{uri: 'https://images.unsplash.com/photo-1484502249930-e1da807099a5?ixlib=rb-0.3.5&s=b036184e85ee6e67a98c83f678874f31&auto=format&fit=crop&w=1567&q=80'}}
          style={styles.image} 
        >
          <View style={[styles.container, styles.opacity]}>
            <KeyboardAvoidingView
              behavior="padding"
              style={{width: '100%'}}
            >
              <TextInput
                style={styles.input}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                keyboardType='email-address'
                underlineColorAndroid='transparent'
                placeholder = "Email"
                autoCapitalize='none'
              />
              
              <TextInput
                style={styles.input}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                underlineColorAndroid='transparent'
                secureTextEntry={true}
                placeholder = "Password"
              />

              <TouchableOpacity
                style={styles.button}
                onPress={this.handleSubmit}
              >
                <Text style={styles.buttonText}>SIGN IN</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
            
            <View style={{width: '100%', marginTop: 30}}>
              <Text style={{color: '#fff', fontSize: 18, alignSelf: 'center', marginBottom: 30}}>or</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={Actions.signUp}
              >
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.errorMessage
})

export default connect(mapStateToProps, { signIn })(SignIn)

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: '#D7A15A',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: 'center',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#D7A15A',
    padding: 10,
    width: '80%',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  opacity: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }
});