import React, {useState} from 'react';
import {Text, View, Image, ImageBackground, ScrollView} from 'react-native';
import styles from './DieticianRegisterPageStyle';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button/Button';

const DieticianRegisterPage = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Logo />
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
      <InputBox iconName={'account-outline'} placeholder="Üniversite" />
      <InputBox iconName={'account-outline'} placeholder="Hakkınızda :" />
      <InputBox
        iconName={'account-outline'}
        placeholder="Sertifika Ekleyiniz"
      />
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
export default DieticianRegisterPage;
