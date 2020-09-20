import React, {Component, Colors, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';
import ProductGroups from './ProductGroups';
import Basket from './Basket';
import StockItems from './StockItems';
import barcodeService from '../services/barcodeservice';
import {connect} from 'react-redux';
import { addToBasketViaBarcode } from '../actions/stockItem';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Store extends Component {
  constructor(props) {
    super(props);
  }

  pushTestBarcode = () => {
    barcodeService.pushString("12345678");
  }

  barcodeHandler = (barcode) => {
    this.props.addToBasketViaBarcode(barcode);
  }

  componentDidMount() {
    barcodeService.subscribe(this.barcodeHandler)
  }

  componentCleanup() {
    barcodeService.unsubscribe(this.barcodeHandler)
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.productGroups}>
          <ProductGroups></ProductGroups>
        </View>
        <View style={styles.stockItems}>
          <StockItems></StockItems>      
          <TouchableOpacity    
            onPress={this.pushTestBarcode}>
            <Text>Test Barcode</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.basket}>
          <Basket></Basket>
        </View>
      </View>
    );
    }
}
const mapStateToProps = (state) => {
  return {
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasketViaBarcode: (barcode) => dispatch(addToBasketViaBarcode(barcode)),
  };
}
  export default connect(mapStateToProps, mapDispatchToProps)(Store);

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
