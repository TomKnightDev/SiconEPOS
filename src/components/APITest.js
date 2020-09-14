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
import GetItems from '../data_access/getitems';

export default function APITest(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'http://192.168.1.196/Sicon.Sage200.WebAPI/api/Stock/GetProductGroups'
      // 'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000001',
    )
      .then((response) => response.json())
      .then((json) => {
        //setData(json);
        var items = [];
        for (var i = 0; i < json.length; i++) {
          items.push({text: json[i]['ItemCode']});
        }
        setData(items);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <List
          columnCount={4}
          data={data}
          customStyles={{backgroundColor: 'lightyellow'}}></List>
      )}
    </View>
  );
}

//module.exports = {
//   load(uri) {
//     console.log("Called")
//     fetch(
//       uri,
//       // 'http://192.168.1.196/Sicon.Sage200.WebAPI/api/WorksOrderLineAPI/GetWorksOrderLines?WONumber=WO00000001',
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         //setData(json);
//         var items = [];
//         for (var i = 0; i < json.length; i++) {
//           items.push({text: json[i]['ItemCode']});
//         }
//         setData(items);
//       })
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }
// }
