import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

const imageAspectRatio = 428 / 239;
const scaledWidth = Dimensions.get('window').width;
const scaledHeight = scaledWidth / imageAspectRatio;

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
    textDecorationLine:'underline'
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
    textDecorationLine:'underline'
  },
  bottomBackgroundImage: {
    width: scaledWidth,
    height: scaledHeight,
    position: 'absolute',
    bottom: 0,
  },
  bottomImage: {
    bottom: 0,
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
