import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {storeSettings} from '../actions/settings';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [
        {
          value: 1,
          text: '1',
        },
        {
          value: 2,
          text: '2',
        },
        {
          value: 3,
          text: '3',
        },
        {
          value: 4,
          text: '4',
        },
        {
          value: 5,
          text: '5',
        },
        {
          value: 6,
          text: '6',
        },
        {
          value: 7,
          text: '7',
        },
        {
          value: 8,
          text: '8',
        },
        {
          value: 9,
          text: '9',
        },
        {
          value: 11,
          text: 'Clear',
        },
        {
          value: 0,
          text: '0',
        },
        {
          value: 12,
          text: 'Enter',
        },
      ],
    };

    this.props.storeSettings();
  }

  render() {
    return (
      <View>
        <Image
          style={{marginTop: 20, padding: 10, alignSelf: 'center'}}
          source={require('../images/siconlogo.png')}
        />
        <Text style={styles.title}>Welcome to Sicon EPOS</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <FlatList
            style={styles.list}
            numColumns={3}
            data={this.state.numbers}
            keyExtractor={(item) => item.value}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                  if (item.text == 'Enter') {
                    this.props.navigation.navigate('Store');
                  }
                }}>
                <Text style={styles.listItemText}>{item.text}</Text>
              </TouchableOpacity>
            )}></FlatList>
          {/* <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('Store')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settingsReducer.settings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeSettings: () => dispatch(storeSettings()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  title: {
    margin: 20,
    padding: 20,
    fontSize: 80,
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
    // borderRadius: 2,
    fontSize: 30,
  },
  loginButton: {
    padding: 10,
    // borderRadius: 2,
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 150,
  },
  loginButtonText: {
    padding: 10,
    fontSize: 30,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 0,
  },
  listItem: {
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 100,
    height: 100,
    // borderRadius: 10,
    margin: 5,
    backgroundColor: 'white',
    elevation: 1,
  },
  listItemText: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
