import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Search = () => {
  return <TextInput style={styles.search} defaultValue="Ara..." />;
};

const styles = StyleSheet.create({
  search: {
    height: 40,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#E6E6E6',
    color: 'grey',
    paddingLeft: 5,
  },
});

export default Search;
