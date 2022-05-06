import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './Logo.style';
const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImage}
        source={require('../../../assets/images/logo.png')}
      />
      <View style={styles.logoTextContainer}>
        <Text style={styles.logoText}>Fast And Healthy</Text>
        <Text style={styles.sloganText}>
          Daha hızlı, Daha iyi, Daha sağlıklı...
        </Text>
      </View>
    </View>
  );
};
export default Logo;
