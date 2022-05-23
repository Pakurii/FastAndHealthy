import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    borderRadius: 13,
    alignItems: 'center',
    width: deviceSize.width / 1.05,
    margin: 10,
    height: 60,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  inner_container: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
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
