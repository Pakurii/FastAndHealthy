
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,

} from 'react-native';


const SettingsPage = ({navigation}) => {

  return (
    <View style={styles.container}>
      
      
      
      <View style={styles.topView}>
      <Image
          source = {require('../../../assets/images/settings48.png')}
          />
          <Text style={styles.topText}>
            Hesap Ayarları
          </Text>
      </View>
      
         
      <View style={styles.buttonCont} >  
        <TouchableOpacity style={styles.settingsButtons}>
          <Image style={styles.icons}
          source = {require('../../../assets/images/key30.png')}
          />
          <Text style={styles.textstyle}>
            Şifre Değişikliği
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButtons}>
        <Image style={styles.icons}
          source = {require('../../../assets/images/mail.png')}
          />
          <Text style={styles.textstyle}>
            E-posta Değişikliği
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButtons}>
        <Image style={styles.icons}
          source = {require('../../../assets/images/logout.png')}
          />
          <Text style={styles.textstyle}>
            Çıkış Yap
          </Text>
        </TouchableOpacity>

      </View>
      <ImageBackground
      source={require('../../../assets/images/backgroundimage.png')} style={styles.backGroundImage}
      resizeMode='contain'>      
      </ImageBackground>
   </View>
  );
};

const styles = StyleSheet.create({
  settingsButtons: {
    marginTop:20,
    paddingHorizontal: 0,

  },
  container:
  {
    flex:1,
    backgroundColor:'white',
    
  },
  buttonCont:{
    marginTop:50,
    paddingHorizontal:50,
    justifyContent:'center',
    alignItems:'stretch'
    
  },  
  icons:{
    bottom:-15,
  },
  textstyle:
  {
    color:'#116ED8',
    left:30,
    bottom:9,
  },

  topView:{
    top:35,
    marginLeft:20,
  },
  topText:
  {
    left:50,
    top:-40,
    color:'#116ED8',
    fontSize:25,
  },
  backGroundImage:{
    opacity:0.3,
    flex:1,
  }
  
});

export default SettingsPage;
