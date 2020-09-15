import React, {Component, useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import {selectProductGroup, getProductGroups} from '../actions/productGroup';

class ProductGroups extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProductGroups()
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          numColumns={2}
          data={this.props.productGroups}
          keyExtractor={item => item.ProductGroupID}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.selectProductGroup(item.ProductGroupID)}>
              <Text style={styles.listItem}>{item.Code}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productGroups: state.productGroupReducer.productGroups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectProductGroup: (productGroup) =>
      dispatch(selectProductGroup(productGroup)),
    getProductGroups: () => dispatch(getProductGroups()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGroups);

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