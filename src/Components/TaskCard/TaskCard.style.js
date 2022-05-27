import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 13,
    borderColor: '#006EE9',
    borderWidth: 1,
    alignItems: 'center',
    width: deviceSize.width / 1.05,
    margin: 7,
    height: 50,
    
  },
  image: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
  },
  inner_container: {
    marginLeft: 0,
    flex: 1,
    flexDirection: 'row',
    color: 'red',
  },
  point: {
    fontWeight: '600',
    color: '#4A4646',
    fontSize: 17,
    justifyContent: 'center',
  },
  task: {
    paddingLeft: 14,
    justifyContent: 'center',
    color: '#006EE9',
    fontSize: 16,
    
  },
});
