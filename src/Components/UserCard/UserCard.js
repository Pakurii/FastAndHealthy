import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './UserCard.style';

const UserCard = ({press}) => {
  return (
    <View style={styles.container} onMagicTap={press}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/portre.png')}
      />
      <View style={styles.inner_container}>
        <Text style={styles.name}>Merhaba, Simon.</Text>
        <Text style={styles.title}>Her şey yolundadır umarım!</Text>
      </View>
    </View>
  );
};

export default UserCard;
