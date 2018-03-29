import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { signUp } from '../actions/user'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      email: null,
      password: null,
      passwordConfirmation: null,
    }
  }

  clearForm() {
    this.setState({
      name: null,
      email: null,
      password: null,
      passwordConfirmation: null
    })
  }

  handleSubmit = () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    }

    this.props.signUp(user)
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
              style={{ width: '100%' }}
            >
              <TextInput
                style={styles.input}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
                underlineColorAndroid='transparent'
                placeholder = "Name"
              />

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

              <TextInput
                style={styles.input}
                onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
                value={this.state.passwordConfirmation}
                underlineColorAndroid='transparent'
                secureTextEntry={true}
                placeholder = "Confirm password"
              />
              
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleSubmit}
              >
              <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
            
            <View style={{width: '100%', marginTop: 30}}>
              <Text style={{color: '#fff', fontSize: 18, alignSelf: 'center', marginBottom: 30}}>or</Text>
              
              <TouchableOpacity
                style={styles.button}
                onPress={Actions.signIn}
              >
                <Text style={styles.buttonText}>SIGN IN</Text>
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

export default connect(mapStateToProps, { signUp })(SignUp)

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