import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './DieticianRegisterPageStyle';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button/Button';

const DieticianRegisterPage = () => {
  return (
    <ScrollView style={styles.container}>
      <Logo />
      <InputBox iconName={'account-outline'} placeholder="Ad Soyad" />
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
      <InputBox iconName={'account-outline'} placeholder="Üniversite" />
      <InputBox iconName={'account-outline'} placeholder="Hakkınızda :" />
      <InputBox
        iconName={'account-outline'}
        placeholder="Sertifika Ekleyiniz"
      />
      <View style={styles.innerContainer} />
      <Button buttonText={'Kayıt Ol'} />
      <View style={styles.dontHaveAccountContainer}>
        <Text style={styles.dontHaveAccountText}>Zaten hesabın var mı? </Text>
        <Text style={styles.registerText}>Giriş Yap!</Text>
      </View>

      <ImageBackground style={styles.loginFooterImage}>
        <Image
          style={styles.loginFooterTopImage}
          source={require('../../../assets/images/loginFooterImageBackground.png')}
        />
        <Text style={styles.copyrightFooterText}>HealthyTech ©</Text>
      </ImageBackground>
    </ScrollView>
  );
};
export default DieticianRegisterPage;
