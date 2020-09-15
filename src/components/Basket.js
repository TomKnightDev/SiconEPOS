import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

function Basket(props) {
  return (
    <View style={styles.basket}>
      <FlatList
        inverted={true}
        style={styles.basketItemList}
        data={props.basketItems}
        keyExtractor={(item) => item.ItemID}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Text style={styles.basketItem}>{item.Code}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.total}>Total: £0.00</Text>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    basketItems: state.stockItemReducer.basketItems
  }
}

export default connect(mapStateToProps)(Basket);

const styles = StyleSheet.create({
  basket: {
    padding: 10,
    height: '100%',
  },
  basketItemList: {
    padding: 5,
    // alignContent: 'flex-end',
  },
  basketItem: {
    fontSize: 20,
    padding: 5,
    color: 'black',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: '100%',
    height: 60,
    borderRadius: 2,
    // margin: 1,
    textAlign: 'left',
    // textAlignVertical: 'center',
  },
  total: {
    fontSize: 30,
    padding: 5,
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});
