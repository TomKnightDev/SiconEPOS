import React from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';

export default function ListItem(props) {
  const defaultStyles = {
    fontSize: 20,
    padding: 5,
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 140,
    height: 100,
    borderRadius: 10,
    margin: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  };

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={[defaultStyles, props.customStyles]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemText: {
    //backgroundColor: 'lightgreen'
  },
});
