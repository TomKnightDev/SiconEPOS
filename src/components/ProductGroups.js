import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {selectProductGroup, getProductGroups} from '../actions/productGroup';

class ProductGroups extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProductGroups();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          numColumns={2}
          data={this.props.productGroups}
          keyExtractor={(item) => item.ProductGroupID}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                this.props.selectProductGroup(item.ProductGroupID)
              }>
              <Text style={styles.listItemText}>{item.Description}</Text>
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
    // alignItems: 'center',
    // flex: 1,
  },
  list: {
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    padding: 0,
    // display: 'flex',
    // flex: 1,
    width: '100%',
    // borderWidth: 10
  },
  listItem: {
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    // width: '100%',
    height: 100,
    // borderRadius: 10,
    margin: 1,
    backgroundColor: '#FFFFFF',
    // elevation: 5,
    flex: 1
  },
  listItemText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
