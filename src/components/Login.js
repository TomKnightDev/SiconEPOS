import {Picker} from '@react-native-community/picker';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {PickerItem} from 'react-native/Libraries/Components/Picker/Picker';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouse: 'SHOWROOM',
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Welcome to Sicon EPOS</Text>
        <View style={styles.section}>
          <Text style={styles.text}>Enter web address: </Text>
          <TextInput style={{...styles.input, marginRight: 10}}></TextInput>
          <TouchableOpacity style={{...styles.loginButton}}>
            <Text style={styles.loginButtonText}>Connect</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>Select warehouse: </Text>
          <Picker
            selectedValue={this.state.warehouse}
            style={{height: 50, width: 200}}
            textStyle={{fontSize: 40}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({warehouse: itemValue})
            }>
            <Picker.Item label="SHOWROOM" value="SHOWROOM" />
            <Picker.Item label="WAREHOUSE" value="WAREHOUSE" />
            <Picker.Item label="FACTORY" value="FACTORY" />
          </Picker>
        </View>

        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('Store')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 50,
    alignSelf: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  input: {
    width: 500,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    fontSize: 30,
  },
  loginButton: {
    // margin: 20,
    borderRadius: 2,
    borderWidth: 1,
    alignSelf: 'center',
  },
  loginButtonText: {
    padding: 10,
    fontSize: 30,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
