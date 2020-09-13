import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function Basket(props) {
  const [items, setItems] = useState([
    {id: 0, text: 'Veg', qty: 1},
    {id: 1, text: 'Dairy', qty: 1},
    {id: 2, text: 'Canned', qty: 1},
    {id: 3, text: 'Fruit', qty: 1},
    {id: 4, text: 'Alcohol', qty: 1},
    {id: 5, text: 'Electrical', qty: 1},    
  ]);

  return (
    <View style={styles.basket}>
      <FlatList
        inverted={true}
        style={styles.basketItemList}
        data={items}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
        <Text style={styles.basketItem}>{item.text}: {item.qty}</Text>
        )}
      />
      <Text style={styles.total}>Total: £40.14</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  basket: {
    padding: 10,
    height: '100%',
  },
  basketItemList: {
    padding: 5,
    // alignContent: 'flex-end',
  },
  basketItem: {
    fontSize: 20,
    padding: 5,
    color: 'black',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: '100%',
    height: 60,
    borderRadius: 2,
    // margin: 1,
    textAlign: 'left',
    // textAlignVertical: 'center',
  },
  total: {
    fontSize: 30,
    padding: 5,
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  }
});
