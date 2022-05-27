import React from "react";
import styles from "./ChatScreenStyle";
import {Text,View,SafeAreaView} from "react-native"; 
import Message from "../../Components/Message";
import MessageInput from "../../Components/MessageInput";
import { FlatList } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

const ChatScreen = () => {
    const route = useRoute();
    
    
    return (
        <SafeAreaView style = {styles.page}>
            {/* <FlatList data={chatRoomData.messages}
            renderItem={({item})=> <Message message={item}/>} 
            inverted 
            /> */}
            <Message/>
            <MessageInput></MessageInput>
        </SafeAreaView>
    )
}

      <MessageInput />
    </SafeAreaView>
  );
};

export default ChatScreen;
