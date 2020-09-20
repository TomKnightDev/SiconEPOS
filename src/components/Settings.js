import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouse: 'SHOWROOM',
    };
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
  },
});
