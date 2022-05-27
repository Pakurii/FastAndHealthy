import React, {useState} from 'react';
import {Text, View, Image, ImageBackground, ScrollView} from 'react-native';
import styles from './UserRegisterPageStyle';
import Logo from '../../Components/Logo';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth'

const initialFormValues = {
  userfirstname: '',
  userlastname: '',
  usermail: '',
  userpassword: '',
  userrepassword:"",
  userheight: '',
  userweight: '',
};

const UserRegisterPage = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);

  const handleFormSubmit = async (formValues) => {
    try {
        setLoading(true)
        await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password)
        setLoading(false)
        navigation.navigate('LoginScreen')
    } catch (error) {
        setLoading(true)
        console.log(error)
    }

}
  return (
    <ScrollView style={styles.container}>
      <Logo />
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <InputBox
              value={values.userfirstname}
              onChangeText={handleChange('userfirstname')}
              iconName={'account-outline'}
              placeholder="Ad"
            />
            <InputBox
              value={values.userlastname}
              onChangeText={handleChange('userlastname')}
              iconName={'account-outline'}
              placeholder="Soyad"
            />
            <InputBox
              value={values.usermail}
              onChangeText={handleChange('usermail')}
              iconName={'mail'}
              placeholder="E-mail"
            />
            <InputBox
              value={values.userpassword}
              onChangeText={handleChange('userpassword')}
              iconName={'lock-outline'}
              placeholder="Şifre"
              isPassword={true}
            />
            <InputBox
              value={values.userrepassword}
              onChangeText={handleChange("userrepassword")}
              iconName={'lock-outline'}
              placeholder="Tekrar Şifre Giriniz"
              isPassword={true}
            />
            <InputBox
              value={values.userheight}
              onChangeText={handleChange('userheight')}
              iconName={'account-outline'}
              placeholder="Boy"
            />
            <InputBox
              value={values.userweight}
              onChangeText={handleChange('userweight')}
              iconName={'account-outline'}
              placeholder="Kilo"
            />
            <View style={styles.innerContainer} />
            <Button onPress={handleSubmit} buttonText={'Kayıt Ol'}  />
          </>
        )
        
      }
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
export default UserRegisterPage;
