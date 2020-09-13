import React from 'react';
import {View, Text} from 'react-native';
import ProductGroups from './ProductGroups';
import APITest from './APITest';
import Basket from './Basket';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import configureStore from '../store';
import StockItems from './StockItems';

const store = configureStore();

const MainLayout = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default MainLayout;
