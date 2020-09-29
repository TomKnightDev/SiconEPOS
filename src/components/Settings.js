import React, {Component} from 'react';
import {Text, View, StyleSheet, NativeModules} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import PrintService from '../services/printService'

export class Settings extends Component {

  printService = null;

  constructor(props) {
    super(props);
    this.state = {
      warehouse: 'SHOWROOM',
      deviceList: []
    };
   
    this.printService = new PrintService();
    this.printService.connectPrinter(0);
  }

  componentDidMount = async () => {
    
    this.setState(Object.assign({}, this.state, {
        printedSelected: printedSelected,
        deviceList: devices,
      }));
  }

  printTest = () => {
    this.printService.printText("<C>Test Line</C>\n");
  }

  printAndCutTest = () => {
    this.printService.printAndCut("<C>Test And Cut Line</C>");
  }
  
  popCashDrawer = () => {
    this.printService.openCashDrawer();
  }

  render() {
    return (
      <View>
        <View style={styles.section}>
          <Text style={styles.text}>Enter web address: </Text>
          <TextInput style={{...styles.input, marginRight: 10}}>
            http://192.168.122.66/Sicon.Sage200.WebAPI/api/
          </TextInput>
          <TouchableOpacity style={{...styles.loginButton}}>
            <Text style={styles.loginButtonText}>Test connection</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Select warehouse: </Text>
          <Picker
            selectedValue={this.state.warehouse}
            style={{height: 30, width: 200, textAlign: "center", fontSize: 50, borderRadius: 1, borderWidth: 1}}
            // textStyle={{}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({warehouse: itemValue})
            }>
            <Picker.Item label="SHOWROOM" value="SHOWROOM" />
            <Picker.Item label="WAREHOUSE" value="WAREHOUSE" />
            <Picker.Item label="FACTORY" value="FACTORY" />
          </Picker>
        </View>
        <View style={styles.container}>
        {
          this.state.deviceList.map(device => (
            <Text key={device.device_id}>
              {`device_name: ${device.device_name}, device_id: ${device.device_id}, vendor_id: ${device.vendor_id}, product_id: ${device.product_id}`}
            </Text>
            ))
        }
        <TouchableOpacity style={{...styles.loginButton}} onPress={() => this.printTest()}>
          <Text  style={styles.loginButtonText}> Print Line </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.loginButton}} onPress={() => this.printAndCutTest()}>
          <Text  style={styles.loginButtonText}> Print And Cut Line </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.loginButton}} onPress={() => this.popCashDrawer()}>
          <Text  style={styles.loginButtonText}> Pop Cash Drawer </Text>
        </TouchableOpacity>

        
      </View>
      </View>
      
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  input: {
    width: 600,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    fontSize: 20,
    textAlign: 'center'
  },
  loginButton: {
    padding: 10,
    borderRadius: 2,
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 150,
  },
  loginButtonText: {
    padding: 0,
    fontSize: 20,
    textAlign: 'center'
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20
  },
});
