import React, {Component, Colors, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';
import ProductGroups from './ProductGroups';
import Basket from './Basket';
import BasketActions from './BasketActions';
import StockItems from './StockItems';
import barcodeService from '../services/barcodeService';
import {connect} from 'react-redux';
import {addToBasketViaBarcode} from '../actions/stockItem';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SecondDisplay from './SecondDisplay';
import MenuBar from './MenuBar';

class Store extends Component {
  constructor(props) {
    super(props);
  }
  
  pushTestBarcode = () => {
    barcodeService.pushString('ACS/BLENDER');
  };

  barcodeHandler = (barcode) => {
    this.props.addToBasketViaBarcode(barcode);
  };

  componentDidMount() {
    barcodeService.subscribe(this.barcodeHandler);
  }

  componentWillUnmount() {
    barcodeService.unsubscribe(this.barcodeHandler);
  }

  render() {
    return (
      <>
        <View>       
          <MenuBar></MenuBar>
        </View>
        {/* <SecondDisplay></SecondDisplay> */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.productGroups}>
            <ProductGroups></ProductGroups>
          </View>
          <View style={styles.stockItems}>
            {/* <TouchableOpacity 
            onPress={this.pushTestBarcode}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  borderWidth: 1,
                  borderRadius: 5,
                  margin: 10,
                  padding: 10,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                }}>
                Test Barcode
              </Text>
            </TouchableOpacity> */}
            <StockItems></StockItems>
          </View>
          <View style={styles.basket}>
            <Basket navigation={this.props.navigation}></Basket>
            <BasketActions navigation={this.props.navigation}></BasketActions>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasketViaBarcode: (barcode) =>
      dispatch(addToBasketViaBarcode(barcode)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Store);

const styles = StyleSheet.create({
  productGroups: {
    flex: 1,
    backgroundColor: '#00815D',
    // borderRadius: 10,
    margin: 5,
    borderWidth: 2,
    borderColor: 'grey',
    elevation: 5,
  },
  stockItems: {
    flex: 2,
    backgroundColor: '#003349',
    // borderRadius: 10,
    margin: 5,
    borderWidth: 2,
    borderColor: 'grey',
    elevation: 5,
  },
  basket: {
    margin: 5,
    flex: 1,
    backgroundColor: 'white',
    elevation: 5,
    borderWidth: 2,
    // borderRadius: 10,
    borderColor: 'grey',
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
    // borderRadius: 10,
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
    width: 500,
    // height: 300
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    margin: 20,
  },
  openButton: {
    backgroundColor: '#2196F3',
    // borderRadius: 10,
    padding: 10,
    elevation: 2,
    // alignSelf: 'flex-end'
  },
});
