import React, {useState} from 'react';
import {Text, View, Image, ImageBackground, ScrollView} from 'react-native';
import {Formik} from 'formik';
import styles from './DieticianRegisterPageStyle';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button/Button';

const initialFormValues = {
  dieticianfirstname: '',
  dieticianlastname: '',
  dieticianmail: '',
  dieiticianpassword: '',
  dieticianuniversity: '',
  dieticianaboutyourself: '',
};

const DieticianRegisterPage = ({navigation}) => {
  function handleFormSubmit(formValues) {}
  return (
    <ScrollView style={styles.container}>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <InputBox
              values={values.dieticianfirstname}
              onChangeText={handleChange('dieticianfirstname')}
              iconName={'account-outline'}
              placeholder="Ad"
            />
            <InputBox
              values={values.dieticianlastname}
              onChangeText={handleChange('dieticianlastname')}
              iconName={'account-outline'}
              placeholder="Soyad"
            />
            <InputBox
              values={values.dieticianmail}
              onChangeText={handleChange('dieticianmail')}
              iconName={'mail'}
              placeholder="E-mail"
            />
            <InputBox
              values={values.dieticianpassword}
              onChangeText={handleChange('dieticianpassword')}
              iconName={'lock-outline'}
              placeholder="Şifre"
              isPassword={true}
            />
            <InputBox
              iconName={'lock-outline'}
              placeholder="Tekrar Şifre Giriniz"
              isPassword={true}
            />
            <InputBox
              values={values.dieticianuniversity}
              onChangeText={handleChange('dieticianuniversity')}
              iconName={'account-outline'}
              placeholder="Üniversite"
            />
            <InputBox iconName={'account-outline'} placeholder="Hakkınızda :" />
            <InputBox
              iconName={'account-outline'}
              placeholder="Sertifika Ekleyiniz"
            />
            <View style={styles.innerContainer} />
            <Button onPress={handleSubmit} buttonText={'Kayıt Ol'} />
          </>
        )}
      </Formik>
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
