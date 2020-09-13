import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import ListItem from './ListItem';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          numColumns={this.props.columnCount}
          data={this.props.data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <ListItem
              text={item.text}
              customStyles={this.props.customStyles}
              onPress={() => {}}
              ></ListItem>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
    // borderRadius: 2,
    // borderWidth: 2,
  },
});