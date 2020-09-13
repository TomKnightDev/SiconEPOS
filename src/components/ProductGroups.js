import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import List from './List';
import {connect} from 'react-redux';
import {selectProductGroup} from '../actions/productGroup';

class ProductGroups extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   items: [
    //     {id: 0, text: 'Veg', uri: 'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000001'},
    //     {id: 1, text: 'Dairy', uri: 'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000002'},
    //   ],
    // };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          numColumns={2}
          data={this.props.productGroups}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.selectProductGroup(item.id)}>
              <Text style={styles.listItem}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      // <View>
      //   <List
      //     columnCount={2}
      //     data={this.state.items}
      //     customStyles={{backgroundColor: 'lightgreen'}}></List>
      // </View>
    );
  }
}

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

const mapStateToProps = (state) => {
  return {
    productGroups: state.productGroupReducer.productGroups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectProductGroup: (productGroup) =>
      dispatch(selectProductGroup(productGroup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGroups);
