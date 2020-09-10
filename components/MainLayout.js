import React from 'react';
import { View, Text } from 'react-native';
import ProductGroups from './ProductGroups';
import APITest from './APITest';

const MainLayout = () => {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <ProductGroups></ProductGroups>
            </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}>
            <APITest></APITest>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
            <Text>This is where the items will go</Text>
        </View>
      </View>
    );
};

export default MainLayout;