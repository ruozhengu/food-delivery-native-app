import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';


// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json


const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
 <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone!
          Save to get a shareable url.
        </Text>
        <Card title="Local Modules">
        </Card>
      </View>
);

const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: '#1caf26' }]} />
);



export default class RestaurantPage extends Component {
 state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Food' },
      { key: 'second', title: 'Rating' },
      { key: 'third' , title: 'Contact' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 33,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
