import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListItem from './ListItem';
import List from './List';

export default APITest = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000001',
    )
      .then((response) => response.json())
      .then((json) => {
        //setData(json);
        var items = [];
        for (var i = 0; i < json.length; i++) {
          items.push({'text': json[i]['ItemCode']});
        }
        setData(items);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <List columnCount={4} data={data}></List>
        // <FlatList style={styles.list}
        //   numColumns={4}
        //   data={data}
        //   keyExtractor={({SiWorksOrderLineID}, index) => SiWorksOrderLineID}
        //   renderItem={({item}) => (
        //     <ListItem text={item.ItemCode}></ListItem>
        //     // <TouchableOpacity
        //     // style={styles.item}
        //     // onPress={(item) => {Alert.alert(item.Quantity)}}>
        //     //   <Text style={styles.itemText}>{item.ItemCode}</Text>
        //     // </TouchableOpacity>
        //   )}
        // />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    // padding: 10,
    color: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 140,
    height: 100,
    borderRadius: 10,
    margin: 2,
    backgroundColor: 'lightgreen',
  },
  itemText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    margin: 1,
    marginTop: 20,
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
    // borderRadius: 2,
    // borderWidth: 2,
  },
});
