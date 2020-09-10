import React from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

export default function ListItem(props) {
  return (
    <TouchableOpacity 
      onPress={() => {
        Alert.alert(props.text);
      }}>
      <Text style={styles.itemText} backgroundColor={props.color}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 20,
    //flex: 1,
    //padding: 10,
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 140,
    height: 100,
    borderRadius: 10,
    margin: 1,
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'lightgreen'
  },
});
