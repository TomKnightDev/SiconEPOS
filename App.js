import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Store from './src/components/Store';
import Login from './src/components/Login';
import Pay from './src/components/Pay';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import KeyEvent from 'react-native-keyevent';
import barcodeService from './src/services/barcodeService';
import Settings from './src/components/Settings';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Modal, View, StyleSheet, Text, LogoTitle} from 'react-native';
import SecondDisplay from './src/components/SecondDisplay';

const Stack = createStackNavigator();
const store = configureStore();

const App = ({navigation}) => {
  useEffect(() => {
    KeyEvent.onKeyDownListener((keyEvent) => {
      if (keyEvent.keyCode != 59) {
        barcodeService.pushCharacter(keyEvent.pressedKey);
      }
    });
    return function cleanup() {
      KeyEvent.removeKeyDownListener();
    };
  });

  return (
    <Provider store={store}>
      <SecondDisplay></SecondDisplay>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={({navigation}) => ({
              title: 'Login',
              headerRight: () => (
                <Button
                  title={'Settings'}
                  onPress={() => {
                    navigation.navigate('Settings');
                  }}
                />
              ),
            })}
          />
          <Stack.Screen name="Store" component={Store} />
          <Stack.Screen name="Pay" component={Pay} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
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
});
