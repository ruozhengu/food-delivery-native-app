import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation';


import CustomerProfile from './CustomerProfile';
import DriverProfile from './DriverProfile';
import RestaurantProfile from './RestaurantProfile';
import CustomerProfileSign from './CustomerProfileSign'
import DriverProfileSign from './DriverProfileSign';
import RestaurantProfileSign from './RestaurantProfileSign';
              // this.props.navigation.navigate('Restaurant', {
              //   data: rowData,
              // })

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, alignSelf: 'center', padding: 25 }}>
          Chose the option that best suits you
        </Text>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('CustomerProfileSign');
          }}>
          <Card title="Consumer" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DriverProfileSign');
          }}>
          <Card title="Driver" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('RestaurantProfileSign');
          }}>
          <Card title="Restaurant" />
        </TouchableOpacity>
      </View>
    );
  }
}



export default (RootNavi = createStackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
    },
    CustomerProfile: {
      screen: CustomerProfile,
    },
    CustomerProfileSign: {
      screen: CustomerProfileSign,
    },
    DriverProfile: {
      screen: DriverProfile,
    },
    DriverProfileSign: {
      screen: DriverProfileSign,
    },
    RestaurantProfile: {
      screen: RestaurantProfile,
    },
    RestaurantProfileSign: {
      screen: RestaurantProfileSign,
    },
  },
  {
    initialRouteName: 'ProfileScreen',
    // initialRouteParams: { location: 'something' },
  }
));




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
