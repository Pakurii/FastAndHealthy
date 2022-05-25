import { View, Text,TextInput,Pressable,KeyboardAvoidingView,Platform } from 'react-native'
import React ,{useState} from 'react'
import styles from "./MessageInputStyle";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const MessageInput = () => {
    const [message,setMessage] = useState("");
    const sendMessage = () =>{
        
        setMessage("");
    }
    const onPlusClicked = () => {
        
    }
    const onPress = () =>{
        message ? sendMessage():onPlusClicked();
    }

  return (
    <KeyboardAvoidingView   
     behavior={Platform.OS === "ios" ? "padding" : "height"}  
     style = {styles.root}
     keyboardVerticalOffset={100}
     >
      <View style = {styles.inputContainer}>
      <Icon name = "face-man-outline" size = {24} color="#595959" style = {styles.icon} />
        <TextInput 
        style = {styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Mesaj Yazınız..."  />
        <Icon name="camera" size={24} color ="#595959"  style = {styles.icon} ></Icon>
        <Icon name= "microphone-outline" size={24} color ="#595959" style = {styles.icon} ></Icon>
      </View>
        <Pressable onPress={onPress} style= {styles.buttonContainer}>
            {message ? <Icon name="arrow-right" size ={24} color="white" ></Icon> :<Icon name="plus" size={24} color="white"  ></Icon>}
            
        </Pressable>
    </KeyboardAvoidingView>
  )
}

export default MessageInput