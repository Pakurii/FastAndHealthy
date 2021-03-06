import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({

  logoContainer: {
    width: Dimensions.get('window').width,
  },
  logoImage: {
    width: Dimensions.get('window').width,
    height: 150,
    marginTop: 5,
  },

    logoContainer:{
      width:Dimensions.get('window').width,
      alignItems:'center'
    },
    logoImage:{
        height:150,
        marginTop:5,
         
    },


  logoTextContainer: {
    alignItems: 'center',
    margin: 10,
  },
  logoText: {
    fontFamily: 'Blinker-SemiBold',
    fontSize: 27,
  },
  sloganText: {
    fontFamily: 'Blinker-SemiBold',
    fontSize: 11,
  },
});
