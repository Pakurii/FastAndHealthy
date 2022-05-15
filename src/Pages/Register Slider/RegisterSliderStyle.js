import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: 320,
    marginVertical: 32,
    marginBottom: 50,
  },
  text: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 122,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.85)',
    textAlign: 'center',
  },

  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  activeDot: {
    width: 20,
    backgroundColor: '#116ED8',
  },
  dot: {
    backgroundColor: '#c4c4c4',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    top: -50,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: '#116ED8',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});
