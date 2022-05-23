import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';

import styles from './LoginPageStyle';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button/Button';

const LoginPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.centerContainer}>
        <InputBox iconName={'account-outline'} placeholder="Kullanıcı Adı" />
        <InputBox
          iconName={'lock-outline'}
          placeholder="Şifre"
          isPassword={true}
        />
        <View style={styles.rememberAndForgotPasswordContainer}>
          <Text style={styles.rememberMeText}>Beni Hatırla</Text>
          <Text style={styles.forgotPasswordText}>Şifreni mi unuttun?</Text>
        </View>
        <Button buttonText={'Giriş Yap'} />

        <View style={styles.dontHaveAccountContainer}>
          <Text style={styles.dontHaveAccountText}>Bir hesabın yok mu? </Text>
          <Text style={styles.registerText}>Kayıt Ol!</Text>
        </View>
        <View style={styles.bottomContainer}>
          <ImageBackground
            style={styles.bottomBackgroundImage}
            source={require('../../../assets/images/loginFooterImage.png')}
          />
        </View>
      </View>
    </View>
  );
};
export default LoginPage;
