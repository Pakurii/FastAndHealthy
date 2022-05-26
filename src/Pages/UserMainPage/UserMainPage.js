import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import UserCard from '../../Components/UserCard/UserCard';
import styles from './UserMainPageStyle';
import ArPointCard from '../../Components/ArPointCard';
import TaskCard from '../../Components/TaskCard';

const UserMainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Fast and Healthy</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterSliderScreen')}>
          <Text>Kullanıcıyım</Text>
        </TouchableOpacity>
      </View>
      <View>
        <UserCard />
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../../assets/images/step.png')} />
          </View>
          <View style={styles.stepContainer}>
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
        <Text style={styles.arPointText}>
          AR ile topladığın materyallere göz atalım:
        </Text>
        <View style={styles.arPointContainer}>
          <ArPointCard
            source={require('../../../assets/images/bear.png')}
            text={'10/10'}
          />
          <ArPointCard
            source={require('../../../assets/images/dolphin.png')}
            text={'10/4'}
          />
          <ArPointCard
            source={require('../../../assets/images/goat.png')}
            text={'10/6'}
          />
        </View>
        <View style={styles.myTaskContainer}>
          <Text style={styles.myTaskText}>Görevlerim :</Text>
          <TaskCard textPoint={25} textTask={'Bugün en az 3000 adım at'} />
          <TaskCard
            textPoint={75}
            textTask={'Bugün  en az 2.5 kilometre koş'}
          />
          <TaskCard textPoint={50} textTask={'Bugün 30dk boyunca fitness'} />
          <TaskCard textPoint={25} textTask={'Bugün en az 250 puana ulaş'} />
        </View>
      </View>
      {/* <CalendarStrip
        // showWeekNumber
        selectedDate={'2022/05/24'}
        // onPressDate={date => {
        //   this.setState({selectedDate: date});
        // }}
        // onPressGoToday={today => {
        //   this.setState({selectedDate: today});
        // }}
        // onSwipeDown={() => {
        //   alert('onSwipeDown');
        // }}
        markedDate={['2022-05-24', '2022-05-26', '2022-05-04', '2022-05-01']}
        weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
      /> */}
    </View>
  );
};
export default UserMainPage;
