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

  progressBar: {
    height: 5,
    flexDirection: 'row',
    margin: 3,
    width: 300,
    backgroundColor: '#c4c4c4',
    borderRadius: 15,
  },
  lastContainer: {
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
  stepText: {
    paddingLeft: 20,
    paddingTop: 7,
    fontFamily: 'Blinker-Regular',
    color: 'black',
    fontWeight: '700',
    fontSize: 15,
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
