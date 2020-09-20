import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Store from './src/components/Store';
import Login from './src/components/Login';
import Pay from './src/components/Pay'
import {Provider} from 'react-redux';
import configureStore from './src/store';
import KeyEvent from 'react-native-keyevent';
import barcodeService from './src/services/barcodeservice';

const Stack = createStackNavigator();
const store = configureStore();

const App = ({navigation}) => {

  useEffect(() => {
    KeyEvent.onKeyDownListener((keyEvent) => {
      barcodeService.pushCharacter(keyEvent.pressedKey);
    });
    return function cleanup() {
       KeyEvent.removeKeyDownListener();
    };
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Store" component={Store} />
          <Stack.Screen name="Pay" component={Pay}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
