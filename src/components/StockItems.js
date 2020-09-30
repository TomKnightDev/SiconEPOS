import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListItem from './ListItem';
import List from './List';
import GetItems from '../data_access/getitems';
import {connect} from 'react-redux';
import {addToBasket} from '../actions/stockItem';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

function StockItems(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {selectedItem.Name} £{selectedItem.Price}
            </Text>
            <SafeAreaView style={{height: 100}}>
              <ScrollView>
                <Text style={{fontSize: 15}}>{selectedItem.Description}</Text>
              </ScrollView>
            </SafeAreaView>
            <Image
              style={{margin: 10}}
              source={{
                uri: `${props.webapiaddress}StockItemImagesFile/GetDefaultImageAsImage?itemCode=${selectedItem.Code}`,
                width: 300,
                height: 300,
              }}
            />
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>Close</Text>
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
            onPress={() => {
              props.addToBasket(item);
            }}
            delayLongPress={1500}
            onLongPress={() => {
              setSelectedItem(item);
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.listItemText}>{item.Name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedProductGroup: state.productGroupReducer.selectedProductGroup,
    webapiaddress: state.settingsReducer.settings.webapiaddress,
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
    // alignItems: 'center',
  },
  list: {
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    padding: 10,
    width: '100%',
  },
  listItem: {
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    // width: 140,
    height: 100,
    // borderRadius: 10,
    margin: 1,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    flex: 1,
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
  openButton: {
    backgroundColor: '#2196F3',
    // borderRadius: 10,
    padding: 10,
    elevation: 2,
    // alignSelf: 'flex-end'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
  },
});
