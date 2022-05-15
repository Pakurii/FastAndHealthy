import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import styles from './Button.style';
const Button = ({buttonText}) => {
  return (
    <TouchableHighlight>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default Button;
