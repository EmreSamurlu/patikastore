import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCards.style';

const ProductCards = ({products}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: products.imgURL}} />
        <Text style={styles.title}> {products.title} </Text>
        <Text style={styles.price}> {products.price} </Text>
        <Text style={styles.inStock}>
          {' '}
          {products.inStock ? null : 'STOKTA YOK'}{' '}
        </Text>
      </View>
    </View>
  );
};

export default ProductCards;
