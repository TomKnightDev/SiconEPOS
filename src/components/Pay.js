import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import GetItems from '../data_access/getitems';
import Basket from './Basket';
import CashOptions from './CashOptions';
import {connect} from 'react-redux';
import {createSalesOrder} from '../actions/salesOrder';

class Pay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = [
      {
        id: 0,
        text: 'Cash',
      },
      {
        id: 1,
        text: 'Card',
      },
      {
        id: 2,
        text: 'Sage Pay',
      },
    ];

    return (
      <View style={styles.pay}>
        <View style={styles.payOptions}>
          <FlatList
            numColumns={1}
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.payOption}>
                <Text style={styles.payOptionText}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.payInfo}>
          <CashOptions></CashOptions>
          <View style={styles.enter}>
            <TouchableOpacity
              onPress={() =>
                this.props.createSalesOrder('CASH01', this.props.basketItems)
              }>
              <Text style={styles.enterText}>Enter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Basket></Basket>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    basketItems: state.stockItemReducer.basketItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSalesOrder: (account, items) =>
      dispatch(createSalesOrder(account, items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pay);

const styles = StyleSheet.create({
  pay: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    margin: 10,
  },
  payOptions: {
    flex: 1,
  },
  payInfo: {
    flex: 2,
  },
  payOption: {
    borderWidth: 1,
    margin: 10,
    width: 'auto',
    padding: 10,
  },
  payOptionText: {
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  enter: {
    height: 50,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
  },
  enterText: {
    fontSize: 30,
    textAlign: 'center',
  },
});
