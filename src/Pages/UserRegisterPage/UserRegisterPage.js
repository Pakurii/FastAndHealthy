import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './UserRegisterPageStyle';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button/Button';

const UserRegisterPage = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Logo />
      <View>
        <InputBox iconName={'account-outline'} placeholder="Ad" />
        <InputBox iconName={'account-outline'} placeholder="Soyad" />
        <InputBox iconName={'mail'} placeholder="E-mail" />
        <InputBox
          iconName={'lock-outline'}
          placeholder="Şifre"
          isPassword={true}
        />
        <InputBox
          iconName={'lock-outline'}
          placeholder="Tekrar Şifre Giriniz"
          isPassword={true}
        />
        <InputBox iconName={'account-outline'} placeholder="Boy" />
        <InputBox iconName={'account-outline'} placeholder="Kilo" />
      </View>

      <View style={styles.innerContainer} />
      <Button
        buttonText={'Kayıt Ol'}
        click={() => navigation.navigate('LoginScreen')}
      />

      <View style={styles.dontHaveAccountContainer}>
        <Text style={styles.dontHaveAccountText}>Zaten hesabın var mı? </Text>

        <Text
          style={styles.registerText}
          onPress={() => navigation.navigate('LoginScreen')}>
          Giriş Yap!
        </Text>
      </View>
    </ScrollView>
  );
};
export default UserRegisterPage;
