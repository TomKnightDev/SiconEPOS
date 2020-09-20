import React, {Colors, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import ProductGroups from './ProductGroups';
import Basket from './Basket';
import StockItems from './StockItems';
import barcodeService from '../services/barcodeservice'

let barcodeHandler = function (barcode) {
  console.log(barcode);
}

const Store = ({navigation}) => {

  useEffect(() => {
    barcodeService.subscribe(barcodeHandler)
    return function cleanup() {
       barcodeService.unsubscribe(barcodeHandler)
    };
  });

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={styles.productGroups}>
        <ProductGroups></ProductGroups>
      </View>
      <View style={styles.stockItems}>
        <StockItems></StockItems>
      </View>
      <View style={styles.basket}>
        <Basket></Basket>
      </View>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  productGroups: {
    flex: 1,
    backgroundColor: '#08415C',
    borderRadius: 10,
    margin: 5,
    borderWidth: 2,
    borderColor: 'grey',
    elevation: 5
  },
  stockItems: {
    flex: 2,
    backgroundColor: '#CC2936',
    borderRadius: 10,
    margin: 5,
    borderWidth: 2,
    borderColor: 'grey',
    elevation: 5
  },
  basket: {
    margin: 5,
    flex: 1,
    backgroundColor: 'white',
    elevation: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',

  },
});
