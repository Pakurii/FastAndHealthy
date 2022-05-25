import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: '#3B8AC4',
    borderRadius: 13,
    alignItems: 'center',
    width: deviceSize.width / 3.6,
    height: deviceSize.width / 3.8,
    margin: 5,
    marginLeft: 13,
  },

  pointContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 42,

    width: 40,
    height: 20,
    borderRadius: 12,
  },

  arPointText: {
    fontSize: 12,
    color: 'black',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
  name: {
    fontWeight: 'normal',
    color: 'black',
    fontSize: 20,
  },
  title: {
    fontSize: 12,
  },
});
