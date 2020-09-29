import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {getCustomerAccounts, customerSelected} from '../actions/salesLedger';
import {connect} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

class MenuBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false,
    filter: '',
  };

  componentDidMount() {
    this.props.getCustomerAccounts();
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
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
                  onTextInput={(text) =>
                    this.setState({filter: {text}})
                  }></TextInput>
              </View>
              <FlatList
                data={
                  this.props.customerAccounts
                  // .filter((ac) =>                  ac.Name.includes(this.props.filter),                )
                }
                keyExtractor={(item) => item.Id}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.customerSelected(item.Id);
                      this.setModalVisible(false);
                    }}>
                    <Text style={styles.modalText}>
                      {item.Name} - {(!!item.AccountIsOnHold).toString()}
                    </Text>
                  </TouchableOpacity>
                )}></FlatList>
              <TouchableOpacity
                style={styles.openButton}
                onPress={() => {
                  this.setModalVisible(false);
                }}>
                <Text style={{fontSize: 20, color: 'white'}}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.bar}>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setModalVisible(!modalVisible);
              }}>
              <Text style={styles.buttonText}>Account</Text>
            </TouchableOpacity>
            <View style={styles.option}>
              <Text style={styles.text}>{this.props.selectedAccount.Name}</Text>
            </View>
          </View>
          <View style={styles.option}>
            <Text style={styles.text}>User: Tom</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customerAccounts: state.salesLedgerReducer.customerAccounts,
    selectedAccount: state.salesLedgerReducer.selectedAccount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    customerSelected: (customerAccount) =>
      dispatch(customerSelected(customerAccount)),
    getCustomerAccounts: () => dispatch(getCustomerAccounts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);

const styles = StyleSheet.create({
  bar: {
    // height: 300,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
  },
  option: {
    //   paddingTop: 5,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 30,
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
    padding: 15,
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
    height: '90%',
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
    margin: 5,
    elevation: 2,
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    fontSize: 20,
    height: 50,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    // borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    elevation: 5,
    // alignSelf: 'flex-end'
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});