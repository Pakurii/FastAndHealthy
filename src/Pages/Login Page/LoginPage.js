import React, {useState} from 'react';
import {Text, View, Image, ImageBackground,TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import styles from './LoginPageStyle';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button/Button';

const initialFormValues = {
  username: '',
  password: '',
};

const LoginPage = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  function onHandleSignUp() {
    navigation.navigate('RegisterSlider');
  }
  const handleFormSubmit = async formValues => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.username,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('SignPage');
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  return (
    <View style={styles.centerContainer}>
      <Logo />
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <InputBox
              onChangeText={handleChange('username')}
              iconName={'account-outline'}
              placeholder="Kullanıcı Adı"
              value={values.username}
            />
            <InputBox
              onChangeText={handleChange('password')}
              iconName={'lock-outline'}
              placeholder="Şifre"
              isPassword={true}
              value={values.password}
            />
            <View style={styles.rememberAndForgotPasswordContainer}>
              <Text style={styles.rememberMeText}>Beni Hatırla</Text>
              <Text style={styles.forgotPasswordText}>Şifreni mi unuttun?</Text>
            </View>
            <Button buttonText={'Giriş Yap'} onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <View style={styles.dontHaveAccountContainer}>
        <Text style={styles.dontHaveAccountText}>Bir hesabın yok mu? </Text>
        <TouchableOpacity onPress={onHandleSignUp} >
                <Text  style={styles.registerText} >Kayıt Ol</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer} />
    </View>
  );
};
export default LoginPage;
