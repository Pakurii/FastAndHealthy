import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  innerContainer: {
    padding: 10,
    width: deviceSize.width / 1.05,
    marginLeft: 10,
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    marginRight: 40,
    marginBottom: 5,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arPointContainer: {
    marginRight: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },

  progressBar: {
    height: 5,
    flexDirection: 'row',
    margin: 3,
    width: 300,
    backgroundColor: '#c4c4c4',
    borderRadius: 15,
  },
  stepContainer: {
    height: 60,
    backgroundColor: 'white',

    flexDirection: 'column',

    marginBottom: 5,
  },

  imageContainer: {
    backgroundColor: '#c4c4c4',
    width: 40,
    borderRadius: 20,
    height: 40,
  },
  myTaskContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepText: {
    paddingLeft: 20,
    paddingTop: 7,
    fontFamily: 'Blinker-Regular',
    color: 'black',
    fontWeight: '700',
    fontSize: 15,
  },

  arPointText: {
    paddingLeft: 12,
    fontSize: 15,
    fontWeight: '400',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
  },
  myTaskText: {
    paddingTop: 10,
    alignItems: 'center',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: '#474747',
  },

  stepCounter: {
    fontFamily: 'Blinker-Regular',
    color: 'black',
    paddingLeft: 20,
    fontWeight: '700',
    fontSize: 15,
  },

  headerText: {
    margin: 10,
    fontSize: 25,
    color: '#116ED8',
    fontWeight: '700',
    fontFamily: 'Blinker-Regular',
  },
});
