import React from 'react';
import { View,TextInput } from 'react-native';
import styles from './InputBox.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const InputBox=({iconName,placeholder,isPassword=false})=>{
    return(
        <View style={styles.inputContainer}>
          
         <TextInput  style={styles.inputBox} placeholder={placeholder} secureTextEntry={isPassword} />
            
         <Icon  name={iconName} size={25} color='#C4C4C4'></Icon>
        </View>
    )
}
export default InputBox;