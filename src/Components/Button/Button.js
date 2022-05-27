import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';
const Button = ({buttonText, click}) => {
  return (
    <TouchableOpacity onPress={click} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default Button;
