import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import styles from './DieticianRegisterPageStyle';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button/Button';

const initialFormValues = {
  dieticianfirstname: "",
  dieticianlastname:"",
  dieticianmail:"",
  dieiticianpassword:"",
  dieticianuniversity:"",
  dieticianaboutyourself:""
}

const DieticianRegisterPage = () => {
  function handleFormSubmit(formValues) {

  }
  return (
    <ScrollView style={styles.container}>
      <Logo />
      <Formik initialValues={initialFormValues} onSubmit= {handleFormSubmit}>
      {({values,handleChange,handleSubmit}) =>(
      <>
      <InputBox values={values.dieticianfirstname} onChangeText = {handleChange("dieticianfirstname")} iconName={'account-outline'} placeholder="Ad" />
      <InputBox values={values.dieticianlastname} onChangeText = {handleChange("dieticianlastname")} iconName={'account-outline'} placeholder="Soyad" />
      <InputBox values={values.dieticianmail} onChangeText = {handleChange("dieticianmail")} iconName={'mail'} placeholder="E-mail" />
      <InputBox values={values.dieticianpassword}
        onChangeText = {handleChange("dieticianpassword")}
        iconName={'lock-outline'}
        placeholder="Şifre"
        isPassword={true}
      />
      <InputBox
        iconName={'lock-outline'}
        placeholder="Tekrar Şifre Giriniz"
        isPassword={true}
      />
      <InputBox values={values.dieticianuniversity} onChangeText = {handleChange("dieticianuniversity")} iconName={'account-outline'} placeholder="Üniversite" />
      <InputBox iconName={'account-outline'} placeholder="Hakkınızda :" />
      <InputBox
        iconName={'account-outline'}
        placeholder="Sertifika Ekleyiniz"
      />
      <View style={styles.innerContainer} />
      <Button onPress ={handleSubmit} buttonText={'Kayıt Ol'}  />
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
export default DieticianRegisterPage;
