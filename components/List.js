import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ListItem from './ListItem'

export default function List(props) {
  return (
    <FlatList
      style={styles.list}
      numColumns={props.columnCount}
      data={props.data}
      keyExtractor={({id}, index) => id}
      renderItem={({item}) => <ListItem text={item.text}></ListItem>}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
    // borderRadius: 2,
    // borderWidth: 2,
  },
});
