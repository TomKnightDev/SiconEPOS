import React, {Component, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

export class CashOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taken: 0.0,
    };
  }

  render() {
    const denominations = [
      {
        id: 0,
        text: '£50',
        value: 50,
      },
      {
        id: 1,
        text: '£20',
        value: 20,
      },
      {
        id: 2,
        text: '£10',
        value: 10,
      },
      {
        id: 3,
        text: '£5',
        value: 5,
      },
      {
        id: 4,
        text: '£2',
        value: 2,
      },
      {
        id: 5,
        text: '£1',
        value: 1,
      },
      {
        id: 6,
        text: '50p',
        value: 0.5,
      },
      {
        id: 7,
        text: '20p',
        value: 0.2,
      },
      {
        id: 8,
        text: '10p',
        value: 0.1,
      },
      {
        id: 9,
        text: '5p',
        value: 0.05,
      },
      {
        id: 10,
        text: '2p',
        value: 0.02,
      },
      {
        id: 11,
        text: '1p',
        value: 0.01,
      },
    ];

    return (
      <View style={{alignSelf: 'center', alignItems: 'center'}}>
        <FlatList
          numColumns={4}
          data={denominations}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.payOption}
              onPress={() =>
                this.setState({taken: this.state.taken + item.value})
              }>
              <Text style={styles.buttonText}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity
            style={{...styles.clear}}
            onPress={() => this.setState({taken: 0.0})}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
          <View style={{...styles.taken, flexDirection: 'row'}}>
            <Text style={styles.buttonText}>Taken: </Text>
            <Text style={{...styles.buttonText, marginLeft: 'auto'}}>
              £{this.state.taken}
            </Text>
          </View>
          <View style={{...styles.taken, flexDirection: 'row'}}>
            <Text style={styles.buttonText}>Change due: </Text>
            <Text style={{...styles.buttonText, marginLeft: 'auto'}}>
              £{Math.max(0, this.state.taken - this.props.basketTotal)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    basketItems: state.stockItemReducer.basketItems,
    basketTotal: state.stockItemReducer.basketTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CashOptions);

const styles = StyleSheet.create({
  payOption: {
    borderWidth: 1,
    margin: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
    padding: 10,
  },
  taken: {
    height: 50,
    width: 220,
    borderWidth: 1,
    margin: 10,
    // justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  clear: {
    height: 50,
    width: 100,
    borderWidth: 1,
    margin: 10,
    justifyContent: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
