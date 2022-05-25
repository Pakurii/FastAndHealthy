import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ArPointCard.style';

const ArPointCard = ({source, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pointContainer}>
        <Text style={styles.arPointText}>{text}</Text>
      </View>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={source} />
      </View>
    </View>
  );
};

export default ArPointCard;
