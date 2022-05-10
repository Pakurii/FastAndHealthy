
import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, ImageBackground} from 'react-native';

import React, { useState } from 'react';
import { Text,View,SafeAreaView,Image,ImageBackground,Dimensions} from 'react-native';

import styles from './LoginPageStyle';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button/Button';


const LoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <InputBox iconName={'account-outline'} placeholder="Kullanıcı Adı" />
      <InputBox
        iconName={'lock-outline'}
        placeholder="Şifre"
        isPassword={true}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.rememberMeText}>Beni Hatırla</Text>
        <Text style={styles.forgotPasswordText}>Şifreni mi unuttun?</Text>
      </View>
      <Button buttonText={'Giriş Yap'} />
      <View style={styles.dontHaveAccountContainer}>
        <Text style={styles.dontHaveAccountText}>Bir hesabın yok mu? </Text>
        <Text style={styles.registerText}>Kayıt Ol!</Text>
      </View>

      <ImageBackground
        style={styles.loginFooterImage}
        source={require('../../../assets/images/loginFooterImage.png')}>
        <Image
          style={styles.loginFooterTopImage}
          source={require('../../../assets/images/loginFooterImageBackground.png')}
        />
        <Text style={styles.copyrightFooterText}>HealthyTech ©</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default LoginPage;

const LoginPage=()=>{
    return(
        <SafeAreaView style={styles.container}>
                <Logo/>
                <View style={styles.centerContainer}>
                    <InputBox iconName={'account-outline'} placeholder="Kullanıcı Adı"/>
                    <InputBox  iconName={'lock-outline'} placeholder="Şifre" isPassword={true}/>
                    <View style={styles.rememberAndForgotPasswordContainer}>
                        <Text style={styles.rememberMeText}>Beni Hatırla</Text>
                        <Text style={styles.forgotPasswordText}>Şifreni mi unuttun?</Text>
                    </View>
                   <Button buttonText={'Giriş Yap'}/>
                    
                    <View style={styles.dontHaveAccountContainer}>
                        <Text style={styles.dontHaveAccountText}>Bir hesabın yok mu? </Text>
                        <Text style={styles.registerText}>Kayıt Ol!</Text>
                        
                    </View>
                    <View style={styles.bottomContainer}>
                        
                    <ImageBackground style={styles.bottomBackgroundImage} source={require('../../../assets/images/loginFooterImage.png')}>
                        
                        <Image style={styles.bottomImage} source={require('../../../assets/images/Subtract.png')}></Image>
                        
                    </ImageBackground>
                    </View>
                    
                    
                </View>
                
    
            
        </SafeAreaView>
    )
}
export default LoginPage;

