import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {clearBasketItems} from '../actions/stockItem';

const BasketActions = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        // marginBottom: 10,
        // height: 50,
        margin: 10,
      }}>
      <View
        style={{flexDirection: 'row', marginTop: 10, height: 50, width: 100}}>
        <TouchableOpacity
          style={styles.basketActions}
          onPress={() => {
            props.clearBasketItems();
          }}>
          <Text style={{...styles.basketActionText, backgroundColor: 'red'}}>
            Clear
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          height: 50,
          width: 100,
          marginLeft: 'auto',
        }}>
        <TouchableOpacity
          style={{...styles.basketActions, backgroundColor: 'lightgreen'}}
          onPress={() => props.navigation.navigate('Pay')}>
          <Text style={styles.basketActionText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearBasketItems: () => dispatch(clearBasketItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketActions);

const styles = StyleSheet.create({
  basketActions: {
    flex: 1,
    borderWidth: 1,
    width: 100,
  },
  basketActionText: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
});
