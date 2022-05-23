import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
  TouchableOpacity,
  Icon,
} from 'react-native';
import UserCard from '../../Components/UserCard/UserCard';
import styles from './UserMainPageStyle';

const UserMainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Fast and Healthy</Text>
        <Image source={require('../../../assets/images/icons/customer.png')} />
      </View>
      <View>
        <UserCard />
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../../assets/images/step.png')} />
          </View>
          <View style={styles.lastContainer}>
            <Text style={styles.stepText}>Adım Sayısı</Text>
            <Text style={styles.stepCounter}>4800</Text>
            <View style={styles.progressBar}>
              <Animated.View
                style={
                  ([StyleSheet.absoluteFill],
                  {backgroundColor: '#00A0F3', width: '40%'})
                }
              />
            </View>
          </View>
        </View>
        <Text onPress={() => navigation.navigate('UserRegisterScreen')}>
          sdfsdlkjdsjkfg
        </Text>
      </View>
    </View>
  );
};
export default UserMainPage;
