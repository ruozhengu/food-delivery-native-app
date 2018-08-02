import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import AwesomeButtonRick from 'react-native-really-awesome-button';

import CustomerProfilePage from './CustomerProfilePage';
import DriverProfilePage from './DriverProfilePage';
import RestaurantProfilePage from './RestaurantProfilePage';
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

      static navigationOptions = {
    header: null,
  };



  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, alignSelf: 'center', padding: 25, color:'#fff' }}>
          Chose the option that best suits you
        </Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CustomerProfileSign')}
              style={{
                width: '80%',
                alignItems: 'center',
                margin: 20,
                height: 120,
              }}>
              
              <ImageBackground
                style={{
                  height: '100%',
                  width: '100%',
                  marginTop: 0,
                  borderWidth: 0
                }}
                source={{ uri: 'https://image.shutterstock.com/image-photo/girl-shopping-online-store-using-260nw-1121308838.jpg' }}>
              <View style={{height: '100%', justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)',}}>
              <Text style={{
                            fontSize:27,
                            fontWeight:'bold',
                            alignSelf: 'center', 
                            justifyContent:'center',
                            color:"#fff"}}>
                            Customer
                            </Text>
                            </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DriverProfileSign')}
              style={{
                width: '80%',
                alignItems: 'center',
                margin: 20,
                height: 120,
              }}>
              
              <ImageBackground
                style={{
                  height: '100%',
                  width: '100%',
                  marginTop: 0,
                  borderWidth: 0
                }}
                source={{ uri: 'https://res.cloudinary.com/hhgz8qnrm/image/upload/t_optimized/hbzrnz0uzrfrqudlwdav.jpg' }}>
              <View style={{height: '100%', justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)',}}>
              <Text style={{
                            fontSize:27,
                            fontWeight:'bold',
                            alignSelf: 'center', 
                            justifyContent:'center',
                            color:"#fff"}}>
                            Driver
                            </Text>
                            </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RestaurantProfileSign')}
              style={{
                width: '80%',
                alignItems: 'center',
                margin: 20,
                height: 120,
              }}>
              
              <ImageBackground
                style={{
                  height: '100%',
                  width: '100%',
                  marginTop: 0,
                  borderWidth: 0
                }}
                source={{ uri: 'https://data.luebeck-tourismus.de/typo3temp/GB/csm_shutterstock_73748515_01_cf1fd34057_519ffe33ac.jpg' }}>
              <View style={{height: '100%', justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)',}}>
              <Text style={{
                            fontSize:27,
                            fontWeight:'bold',
                            alignSelf: 'center', 
                            justifyContent:'center',
                            color:"#fff"}}>
                            Restaurant
                            </Text>
                            </View>
              </ImageBackground>
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
    CustomerProfilePage: {
      screen: CustomerProfilePage,
      navigationOptions: (navigation) => ({
        header:null
      }),
    },
    CustomerProfileSign: {
      screen: CustomerProfileSign,
      navigationOptions: (navigation) => ({
        header:null
      }),
    },
    DriverProfilePage: {
      screen: DriverProfilePage,
      navigationOptions: (navigation) => ({
        header:null
      }),
    },
    DriverProfileSign: {
      screen: DriverProfileSign,
      navigationOptions: (navigation) => ({
        header:null
      }),
    },
    RestaurantProfilePage: {
      screen: RestaurantProfilePage,
      navigationOptions: (navigation) => ({
        header:null
      }),
    },
    RestaurantProfileSign: {
      screen: RestaurantProfileSign,
      navigationOptions: (navigation) => ({
        header:null
      }),
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
    alignItems: 'center',

    justifyContent: 'center',
    backgroundColor: '#191717',

    // flexWrap: 'wrap'
  },
  buttons: {
    margin: 24,
  },
});
