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
import {CalendarList} from '@react-native-calendar-list';

const UserMainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fast and Healthy</Text>
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
      </View>
      <CalendarList
        startDate={'2017-02-01'}
        monthsCount={12}
        onDatePress={this.dayPressed}
        initialNumToRender={3}
        rowHeight={40}
        headerHeight={40}
      />
    </View>
  );
};
export default UserMainPage;