import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
  FontAwesome,
} from '@expo/vector-icons';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

import OrderScreen from './OrderScreen'
import ReviewScreen from './ReviewScreen'
import InfoScreen from './InfoScreen'




export default class RestaurantPage extends Component {

  static navigationOptions = ({ navigation }) => {
    // const { params } = navigation.state;

    return {
      title:navigation.state.params.name,

      // header:<Text style={{backgroundColor:'#fff'}}>THIS IS THE HEADER</Text>,
    };
  };


 state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Order' },
      { key: 'second', title: 'Reviews' },
      { key: 'third' , title: 'Info' },
    ],
  };

  renderTabBar=props =>
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#fff' }}
    renderIcon={(props) => {<MaterialCommunityIcons
                    name={'chili-mild' }
                    color="red"
                    size={19}
                  />}}
    tabStyle={{backgroundColor: "#000", height:45}}
  />

  
  render() {
  	// console.log(this.props)
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: OrderScreen,
          second: ReviewScreen,
          third: InfoScreen,
        })}
        onIndexChange={index => this.setState({ index })}
        renderTabBar={this.renderTabBar}
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
