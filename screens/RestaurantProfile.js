import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, alignSelf: 'center', padding: 25 }}>
          Restaurant Page
        </Text>

     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    // alignItems: 'center',

    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    // flexWrap: 'wrap'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
