import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './ChatRoomStyle';
import MessageCard from '../../Components/ChatCard';
import {FlatList} from 'react-native-gesture-handler';

const ChatRoom = ({navigation}) => {
  return (
    <View style={styles.page}>
      {/* <FlatList
            data={chatRoomsData}
            renderItem ={({item}) =>
            <MessageCard chatRoom={item} />}
            showsVerticalScrollIndicator={false}
            /> */}
      <MessageCard onPress={() => navigation.navigate('ChatScreens')} />
    </View>
  );
};

export default ChatRoom;
