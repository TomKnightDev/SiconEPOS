import React, {Component, useEffect, useState} from 'react';
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
  TextInput,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListItem from './ListItem';
import List from './List';
import GetItems from '../data_access/getitems';
import {connect} from 'react-redux';
import {addToBasket} from '../actions/stockItem';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

class StockItems extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false,
    searchModalVisible: false,
    selectedItem: {},
    filter: '',
    filteredStockItems: [],
  };

  componentDidMount() {
    this.setState({filteredStockItems: this.props.stockItems});
  }

  filterList = (e) => {
    const updatedList = this.props.stockItems.filter((item) => {
      return item.Name.toLowerCase().search(e.toLowerCase()) !== -1;
    });
    this.setState({filteredStockItems: updatedList});
    this.setState({filter: e});
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  {this.state.selectedItem.Name} £
                  {this.state.selectedItem.Price}
                </Text>
                <SafeAreaView style={{height: 100}}>
                  <ScrollView>
                    <Text style={{fontSize: 15}}>
                      {this.state.selectedItem.Description}
                    </Text>
                  </ScrollView>
                </SafeAreaView>
                <Image
                  style={{margin: 10}}
                  source={{
                    uri: `${this.props.webapiaddress}StockItemImagesFile/GetDefaultImageAsImage?itemCode=${this.state.selectedItem.Code}`,
                    width: 300,
                    height: 300,
                  }}
                />
                <TouchableOpacity
                  style={styles.openButton}
                  onPress={() => {
                    this.setState({modalVisible: false});
                  }}>
                  <Text style={{fontSize: 20, color: 'white'}}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.searchModalVisible}
            on
            onRequestClose={() => {}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {/* <Text style={styles.modalText}>
                {this.props.selectedAccount.Name}
              </Text> */}
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.modalText}>Search:</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.filterList(text)}>
                    {this.state.filter}
                  </TextInput>
                </View>
                <FlatList
                  data={this.state.filteredStockItems}
                  keyExtractor={(item) => item.ItemID}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        this.props.addToBasket(item);
                        this.setState({searchModalVisible: false});
                      }}>
                      <Text style={styles.modalText}>{item.Name}</Text>
                    </TouchableOpacity>
                  )}></FlatList>
                <TouchableOpacity
                  style={styles.openButton}
                  onPress={() => {
                    this.setState({searchModalVisible: false});
                  }}>
                  <Text style={{fontSize: 20, color: 'white'}}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <FlatList
            style={styles.list}
            numColumns={4}
            data={this.props.selectedProductGroup.Items}
            keyExtractor={(item) => item.ItemID}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                  this.props.addToBasket(item);
                }}
                // delayLongPress={1500}
                onLongPress={() => {
                  this.setState({selectedItem: item});
                  this.setState({modalVisible: true});
                }}>
                <Text style={styles.listItemText}>{item.Name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
          <TouchableOpacity
            style={{
              ...styles.listItem,
              flex: 0,
              margin: 10,
              width: 150,
              height: 60,
              alignSelf: 'center',
            }}
            onPress={() => {
              this.setState({searchModalVisible: true});
            }}>
            <Text style={{...styles.listItemText,fontSize: 30}}>Search</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProductGroup: state.productGroupReducer.selectedProductGroup,
    webapiaddress: state.settingsReducer.settings.webapiaddress,
    stockItems: state.stockItemReducer.stockItems,
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
    margin: 20,
  },
  searchButton: {
    backgroundColor: '#2196F3',
    // borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    elevation: 5,
    // alignSelf: 'flex-end'
  },
  searchButtonText: {
    fontSize: 25,
    color: 'white',
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    fontSize: 20,
    height: 50,
    alignSelf: 'center',
  },
});
