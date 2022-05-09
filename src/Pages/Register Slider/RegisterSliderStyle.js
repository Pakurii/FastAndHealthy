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
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
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
