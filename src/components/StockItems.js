import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListItem from './ListItem';
import List from './List';
import GetItems from '../data_access/getitems';
import {connect} from 'react-redux';
import {addToBasket} from '../actions/stockItem';

function StockItems(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <FlatList
        style={styles.list}
        numColumns={4}
        data={props.selectedProductGroup.Items}
        keyExtractor={(item) => item.ItemID}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.listItem}
            onLongPress={() => {
              setModalVisible(!modalVisible);
            }}
            onPress={() => {
              props.addToBasket(item);
            }}>
            <Text style={styles.listItemText}>{item.Code}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedProductGroup: state.productGroupReducer.selectedProductGroup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (stockItem) => dispatch(addToBasket(stockItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockItems);

const styles = StyleSheet.create({
  container: {
    padding: 0,
    alignItems: 'center',
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
  },
  listItem: {
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 140,
    height: 100,
    borderRadius: 10,
    margin: 1,
    backgroundColor: '#F1BF98',
    elevation: 5,
  },
  listItemText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
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
    borderRadius: 20,
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
    borderRadius: 20,
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
