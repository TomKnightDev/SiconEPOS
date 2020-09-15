import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Store from './src/components/Store';
import Login from './src/components/Login';
import {Provider} from 'react-redux';
import configureStore from './src/store';

const Stack = createStackNavigator();
const store = configureStore();

const App = ({navigation}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Store" component={Store} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
