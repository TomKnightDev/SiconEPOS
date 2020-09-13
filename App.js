/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Flexbox,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainLayout from './src/components/MainLayout';

const App = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Sicon EPOS</Text>
      <MainLayout></MainLayout>
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.sectionTitle}>Sicon EPOS</Text>
        <View style={styles.main}>
          <ScrollView
            flex={.5}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.scrollView}>
            <ProductGroups></ProductGroups>
          </ScrollView>
          <ScrollView
            flex={4}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.scrollView}>
            <APITest></APITest>
          </ScrollView>
          <ScrollView
            flex={.5}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.scrollView}>            
          </ScrollView>
        </View>
      </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 2,
    borderWidth: 2,
    flex: 0,
  },
  main: {
    flex: 0,
    flexDirection: 'row',
    // borderRadius: 2,
    //   borderWidth: 2,
  },
  sectionTitle: {
    fontSize: 24,
    color: Colors.black,
    textAlign: 'center',
    borderRadius: 2,
    borderWidth: 2,
    margin: 10,
  },
});

export default App;
