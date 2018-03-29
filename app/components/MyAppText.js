import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';

export default class MyAppText extends Component {
  render() {    
    return (
      <View>
        <Text style={styles.font}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontFamily: 'nunito',
    fontSize: 18,
  },
});