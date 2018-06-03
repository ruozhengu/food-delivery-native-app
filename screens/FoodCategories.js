import React, { Component } from 'react';
import { ListView, Image, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

let data = [{name:"Category 1"}, {name:'Category 2'}, {name:'Category 3'}, {name:'Category 4'}, {name:'Category 5'}, {name:'Category 6'}, {name:'Category 7'}, {name:'Category 8'}, {name:'Category 9'}, {name:'Category 10'}, {name:'Category 11'}, {name:'Category 12'}, {name:'Category 13'}, {name:'Category 14'}, {name:'Category 15'}, {name:'Category 16'}, {name:'Category 17'}, {name:'Category 18'}, {name:'Category 19'}, {name:'Category 20'} ];

export default class FoodCategories extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <Header />}
      />
    );
  }
}

const Header = (props) => (
  <View style={styles.headerContainer}>
    <Text style={styles.text}>Categories</Text>
  </View>
  );

const Row = (props) => (
  <View style={styles.rowContainer}>
    <Image source={{ uri: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'}} style={styles.photo} />
    <Text style={styles.text}>
      {props.name}, {props.name}
    </Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  rowContainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: 'red',
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

