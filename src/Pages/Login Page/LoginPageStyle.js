import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  innerContainer: {
    padding: 10,
    marginLeft: 40,
    flexDirection: 'row',
    marginRight: 40,
    marginBottom: 5,
  },

  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  centerContainer: {
    flex: 1,
  },

  bottomContainer: {
    flex: 1,
  },

  rememberAndForgotPasswordContainer: {
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
    paddingTop: 15,
    justifyContent: 'center',
    marginBottom: 10,
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

  bottomBackgroundImage: {
    width: deviceSize.width,
    height: 200,
    resizeMode: 'contain',
  },

  bottomImage: {
    bottom: 40,
  },

  loginFooterImage: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
  },

  loginFooterTopImage: {
    bottom: 35,
  },

  copyrightFooterText: {
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    width: deviceSize.width,
    top: deviceSize.height / 4.5,
    fontFamily: 'Blinker-Regular',
    fontSize: 17,
  },
});
