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
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default APITest = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const onPress = (itemCode) => alert(itemCode);

  useEffect(() => {
    fetch(
      'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000001',
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList style={styles.list}
          numColumns={4}
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <TouchableOpacity 
            style={styles.item}
            onPress={(item) => {Alert.alert(item.Quantity)}}>
              <Text>{item.ItemCode}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: 'lightgreen'
  },
  list: {
      flexWrap: 'wrap',
      flexDirection: 'row',      
      padding: 10,
  }
});
