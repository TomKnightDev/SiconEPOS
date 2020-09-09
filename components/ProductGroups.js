import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function ProductGroups() {
  const [items, setItems] = useState([
    {id: 0, text: 'Veg'},
    {id: 1, text: 'Dairy'},
    {id: 2, text: 'Canned'},
    {id: 3, text: 'Fruit'},
    {id: 4, text: 'Alcohol'},
    {id: 5, text: 'Electrical'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        numColumns={2}
        data={items}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    //   borderRadius: 2,
    //   borderWidth: 2,
      flex: 0, 
      padding: 24
    },
  item: {
    fontSize: 20,
    flex: 1,
    padding: 10,
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 150,
    height: 100,
    borderRadius: 10,
    margin: 2,
    backgroundColor: 'lightblue',
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
  },
});
