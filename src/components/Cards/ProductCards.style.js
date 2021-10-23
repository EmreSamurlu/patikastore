import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width / 2.1,
    // height: Dimensions.get('window').height / 2,
    backgroundColor: 'lightgrey',
    margin: 5,
    borderRadius: 10,
    alignContent: 'center',
    paddingBottom: 10,
  },
  image: {
    width: '96%',
    height: Dimensions.get('window').height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'contain',
    padding: 5,
    margin: '2%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
  },
  price: {
    color: 'grey',
    opacity: 0.8,
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
    marginLeft: 5,
  },
  inStock: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
