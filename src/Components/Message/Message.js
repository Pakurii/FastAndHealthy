import { View, Text } from 'react-native'
import styles from "./MessageStyle"
import React from 'react'





const Message = ({message}) => {
    const isMe = true;
  return (
    <View style = {[styles.container,isMe ? styles.rightContainer:styles.leftContainer]}>
      <Text style = {[styles.text,{color: isMe ? "black" : "white"}]}>Message</Text>
    </View>
  )
}

export default Message