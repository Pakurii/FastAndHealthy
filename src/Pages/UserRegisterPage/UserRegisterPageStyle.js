import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
const imageAspectRatio = 428 / 239;
const scaledWidth = Dimensions.get('window').width;
const scaledHeight = scaledWidth / imageAspectRatio;
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  innerContainer: {
    padding: 10,
    marginLeft: 40,
    flexDirection: 'row',
    marginRight: 40,
    marginBottom: 5,
  },

  rememberMeText: {
    flex: 1,
    fontFamily: 'Blinker-Regular',
    color: '#555555',
    fontSize: 15,
  },

  forgotPasswordText: {
    fontFamily: 'Blinker-Regular',
    color: '#116ED8',
    fontSize: 15,
  },

  dontHaveAccountContainer: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 5,
    justifyContent: 'center',
    marginBottom: 0,
  },

  dontHaveAccountText: {
    fontFamily: 'Blinker-Regular',
    color: '#555555',
    fontSize: 15,
  },

  registerText: {
    fontFamily: 'Blinker-Regular',
    color: '#116ED8',
    fontSize: 15,
  },

  loginFooterImage: {
    width: deviceSize.width,
    height:100

  },

  loginFooterTopImage: {
    bottom: deviceSize.height / 6,
  },

  copyrightFooterText: {
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    width: deviceSize.width,
    top: 70,
    fontFamily: 'Blinker-Regular',
    fontSize: 17,
  },
});
