import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import ExternalDisplay, {
  useExternalDisplay,
} from 'react-native-external-display';

const SecondDisplay = (props) => {
  const screens = useExternalDisplay();

  if (Object.keys(screens).length == 0) {
    return <View></View>;
  }

  return (
    <ExternalDisplay
      mainScreenStyle={{flex: 1}}
      fallbackInMainScreen
      screen={Object.keys(screens)[0]}>
      <View style={styles.basket}>
        <Text style={styles.title}>Cashier in training...</Text>
        <FlatList
          inverted={true}
          style={styles.basketItemList}
          data={props.basketItems}
          keyExtractor={(item) => item.ID}
          renderItem={({item}) => (
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text style={styles.basketItem}>{item.Code}</Text>
              <Text style={styles.basketItemPrice}>£{item.Price}</Text>
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
    </ExternalDisplay>
  );
};

const mapStateToProps = (state) => {
  return {
    basketItems: state.stockItemReducer.basketItems,
    basketTotal: state.stockItemReducer.basketTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondDisplay);

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    textAlign: 'center',
  },
  basket: {
    padding: 10,
    flex: 1,
    borderRadius: 1,
    borderWidth: 1,
    margin: 10,
    // height: '80%',
  },
  basketItemList: {
    flex: 1,
    padding: 5,
  },
  basketItem: {
    flex: 2,
    fontSize: 50,
    padding: 0,
    color: 'black',
    borderRadius: 2,
    margin: 1,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  basketItemPrice: {
    flex: 1,
    fontSize: 50,
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
    fontSize: 60,
    // padding: 5,
    color: 'black',
  },
  totalValue: {
    flex: 1,
    fontSize: 60,
    // padding: 5,
    color: 'black',
    textAlign: 'right',
  },
});
