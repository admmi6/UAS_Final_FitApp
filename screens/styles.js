
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;


export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 70,
    bottom: 0,
  },
  input: {
    marginBottom: 15,
  },
  btn: {
    marginTop: 15,
    alignSelf: 'center',
  },
te: {
    flex: 1,
    top: 120,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  te1: {
    color: 'black',
    backgroundColor: 'transparent',
  },
   abg: {
    flex: 1,
    marginTop: deviceHeight / 0,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 70,
    bottom: 0,
  },
};
