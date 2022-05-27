import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './InputBox.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const InputBox = ({iconName, placeholder, isPassword = false,value,onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name={iconName} size={25} color="#C4C4C4" />
      <TextInput
        style={styles.inputBox}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};
export default InputBox;
