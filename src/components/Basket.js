import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {removeFromBasket} from '../actions/stockItem';
import BasketActions from './BasketActions';

function Basket(props) {
  return (
    <View style={styles.basket}>
      <FlatList
        inverted={true}
        style={styles.basketItemList}
        data={props.basketItems}
        keyExtractor={(item) => item.ID}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onLongPress={() => {
              props.removeFromBasket(item);
            }}>
            <Text style={styles.basketItem}>{item.Code}</Text>
            <Text style={styles.basketItemPrice}>£{Number(item.Price).toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.totalView}>
        <Text style={styles.total}>Total:</Text>
        <Text style={styles.totalValue}>
          £{parseFloat(props.basketTotal).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    basketItems: state.stockItemReducer.basketItems,
    basketTotal: state.stockItemReducer.basketTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromBasket: (basketItem) => dispatch(removeFromBasket(basketItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);

const styles = StyleSheet.create({
  basket: {
    padding: 10,
    flex: 1
    // height: '80%',
  },
  basketItemList: {
    flex: 1,
    padding: 5,
  },
  basketItem: {
    flex: 2,
    fontSize: 18,
    padding: 0,
    color: 'black',
    borderRadius: 2,
    margin: 1,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  basketItemPrice: {
    flex: 1,
    fontSize: 20,
    padding: 0,
    color: 'black',
    borderRadius: 2,
    margin: 1,
    textAlign: 'right',
    textAlignVertical: 'center',
  },
  totalView: {
    flexDirection: 'row',
    borderWidth: 1,
    // borderRadius: 4,
    padding: 4,
  },
  total: {
    flex: 1,
    fontSize: 30,
    // padding: 5,
    color: 'black',
  },
  totalValue: {
    flex: 1,
    fontSize: 30,
    // padding: 5,
    color: 'black',
    textAlign: 'right',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    // borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
