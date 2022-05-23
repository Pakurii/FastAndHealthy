import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';
const Button = ({buttonText, click}) => {
  return (
    <TouchableOpacity onPress={click}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Button;
