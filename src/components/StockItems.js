import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListItem from './ListItem';
import List from './List';
import GetItems from '../data_access/getitems';
import {connect} from 'react-redux';
import { addToBasket } from '../actions/stockItem';

function StockItems(props) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        numColumns={4}
        data={props.selectedProductGroup.Items}
        keyExtractor={item => item.ItemID}
        renderItem={({item}) => (
          <TouchableOpacity
          onPress={() => {props.addToBasket(item)}}>
            <Text style={styles.listItem}>{item.Code}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedProductGroup: state.productGroupReducer.selectedProductGroup
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (stockItem) =>
      dispatch(addToBasket(stockItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockItems);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
    // borderRadius: 2,
    // borderWidth: 2,
  },
  listItem: {
    fontSize: 20,
    padding: 5,
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 140,
    height: 100,
    borderRadius: 10,
    margin: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
