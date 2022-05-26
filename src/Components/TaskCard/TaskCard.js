import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './TaskCard.style';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const TaskCard = ({textPoint, textTask}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/reward.png')}
      />
      <View style={styles.inner_container}>
        <Text style={styles.point}>{textPoint}</Text>
        <BouncyCheckbox
          style={{marginLeft: 16}}
          size={25}
          fillColor="#116ED8"
          unfillColor="#FFFFFF"
          text={textTask}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            color: '#4A4646',
            fontWeight: '600',
          }}
          iconStyle={{borderColor: '#116ED8'}}
          // disableBuiltInState
        />
      </View>
    </View>
  );
};

export default TaskCard;
