import React, {Colors} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import ProductGroups from './ProductGroups';
import Basket from './Basket';
import StockItems from './StockItems';

const Store = ({navigation}) => {
  return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <ProductGroups></ProductGroups>
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}>
          <StockItems></StockItems>
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Basket></Basket>
        </View>
      </View>
  );
};

export default Store;

const styles = StyleSheet.create({});
