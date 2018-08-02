import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar } from 'react-native';

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


import Amplify, { API } from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);




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
      { key: 'first', title: 'Order', data: this.props.navigation.state.params.data},
      { key: 'second', title: 'Reviews', data: this.props.navigation.state.params.data},
      { key: 'third' , title: 'Info', data: this.props.navigation.state.params.data}
    ],
  };

  renderTabBar=props =>
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#fff' }}
    tabStyle={{backgroundColor: "#000", height:45}}
  />

  
  render() {
        StatusBar.setBarStyle('dark-content', true);

  	// console.log(this.props.navigation.state.params)
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
