import React from "react";
import styles from "./ChatCardStyle";
import {Text,View,Image,Pressable,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";



const MessageCard = ({chatRoom}) => {
    
    const navigation = useNavigation();
    const onPress = () => {
       navigation.navigate("ChatScreen");
    }

     return (
        
      <Pressable onPress = {onPress} style= {styles.container}>
            <Image source={require("../../../assets/images/portre.png")} style = {styles.image} />
            {/* Okunmamış Mesaj Sayısı 0 ise bu kısmı yazmaz eğer 0'dan büyük ise bu kısmı yazdırır*/}
            { 0 ? <View style = {styles.badgeContainer}>
                <Text style = {styles.badgeText}>4</Text>
            </View> : null}
                
                <View style = {styles.innerContainer}>
                    <View style = {styles.row}>
                        <Text style = {styles.name}>Name</Text>
                        <Text stlye = {styles.text}>Last Time</Text>
                    </View>
                     <Text numberOfLines={1} style={styles.text}>Message</Text>
                </View>
        </Pressable>
      
  )
};

export default MessageCard;
