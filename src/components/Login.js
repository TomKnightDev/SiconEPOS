import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {getProductGroups} from '../actions/productGroup';

const Login = ({props, navigation}) => {
  return (
    <View>
      <Text style={styles.title}>Welcome to Sicon EPOS</Text>
      <TouchableOpacity
        style={styles.loginButton}        
        onPress={() => navigation.navigate('Store')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductGroups: () => dispatch(getProductGroups()),
  };
};

export default connect(mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  title: {
      margin: 20,
    fontSize: 50,
    alignSelf: 'center',
    alignContent: 'center',
  },
  loginButton: {
      margin: 20,
    borderRadius: 6,
    borderWidth: 1,
    alignSelf: 'center',
  },
  loginButtonText: {
      margin: 10,
    fontSize: 40,
  },
});
