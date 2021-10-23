import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import ProductCards from './components/Cards/ProductCards';
import Search from './components/Search/Search';

import data from './data.json';

const App = () => {
  const renderSearch = ({item}) => <Search search={item} />;
  const renderProducts = ({item}) => <ProductCards products={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Patika Store</Text>
      <Search>{renderSearch}</Search>
      <FlatList data={data} renderItem={renderProducts} numColumns={2} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 5,
  },
});

export default App;
