import React from 'react';
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'
import { login } from '../actions/user'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: null,
      password: null
    }
  }

  clearForm() {
    this.setState({
      username: null,
      password: null
    })
  }

  handleSubmit = () => {
    console.log(this.state.username, this.state.password)
    const user = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.login(user)
    this.clearForm()
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.outerContainer}>
        <ImageBackground 
          source={{uri: 'https://images.unsplash.com/photo-1484502249930-e1da807099a5?ixlib=rb-0.3.5&s=b036184e85ee6e67a98c83f678874f31&auto=format&fit=crop&w=1567&q=80'}}
          style={styles.background} 
        >
          <KeyboardAvoidingView
          behavior="padding"
          style={styles.container}
          >
            <TextInput
              style={styles.input}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              keyboardType='email-address'
              underlineColorAndroid='transparent'
              placeholder = "Username"
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
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  hasCurrentUser: state.loggedIn,
  hasError: state.errorMessage
})

export default connect(mapStateToProps, { login })(SignIn)

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
    height: 40,
    borderColor: '#D7A15A',
    borderWidth: 1,
    width: '85%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#D7A15A',
    padding: 10,
    width: '85%',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  background: {
    width: '100%',
    height: '100%',
  }
});