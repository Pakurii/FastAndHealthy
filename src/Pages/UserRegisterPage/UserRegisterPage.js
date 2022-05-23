import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './UserRegisterPageStyle';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button/Button';
import { Formik } from 'formik';

const initialFormValues = {
  userfirstname: "",
  userlastname:"",
  usermail:"",
  userpassword:"",
  userheight:"",
  userweight:"",
}

const UserRegisterPage = () => {
  function handleFormSubmit(formValues) {

  }
  return (
    <ScrollView style={styles.container}>
      <Logo />
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values,handleChange,handleSubmit}) => (
      <>
      <InputBox values={values.userfirstname} onChangeText = {handleChange("userfirstname")} iconName={'account-outline'} placeholder="Ad" />
      <InputBox values={values.userlastname} onChangeText = {handleChange("userlastname")} iconName={'account-outline'} placeholder="Soyad" />
      <InputBox values={values.usermail} onChangeText = {handleChange("usermail")} iconName={'mail'} placeholder="E-mail" />
      <InputBox values={values.userpassword} onChangeText = {handleChange("userpassword")}
        iconName={'lock-outline'}
        placeholder="Şifre"
        isPassword={true}
      />
      <InputBox
        iconName={'lock-outline'}
        placeholder="Tekrar Şifre Giriniz"
        isPassword={true}
      />
      <InputBox values={values.userheight} onChangeText = {handleChange("userheight")} iconName={'account-outline'} placeholder="Boy" />
      <InputBox values={values.userweight} onChangeText = {handleChange("userweight")} iconName={'account-outline'} placeholder="Kilo" />
      <View style={styles.innerContainer} />
      <Button buttonText={'Kayıt Ol'} onPress={handleSubmit} />
      </>
        )}
      </Formik>
      <View style={styles.dontHaveAccountContainer}>
        <Text style={styles.dontHaveAccountText}>Zaten hesabın var mı? </Text>
        <Text style={styles.registerText}>Giriş Yap!</Text>
      </View>

      <ImageBackground style={styles.loginFooterImage}>
        <Image
          style={styles.loginFooterTopImage}
          source={require('../../../assets/images/Subtract.png')}
        />
      </ImageBackground>
    </ScrollView>
  );
};
export default UserRegisterPage;
