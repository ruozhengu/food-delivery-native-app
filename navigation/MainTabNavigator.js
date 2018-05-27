import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ResturantScreen from '../screens/Resturants';
import CategoryScreen from '../screens/FoodCategories';
import OffersScreen from '../screens/SpecialOffers';
import CartScreen from '../screens/Cart';
import StatusScreen from '../screens/Status';

const StatusTab = createStackNavigator({
  SttsTb : StatusScreen
});
StatusTab.navigationOptions = {
  tabBarLabel : "Order Status",
  tabBarIcon : ({focused}) => (
    <Feather 
      name="user"
      size={32}
    />
  )

};

const CartTab = createStackNavigator({
  CrtTb : CartScreen
});
CartTab.navigationOptions = {
  tabBarLabel : "Cart",
  tabBarIcon : ({focused}) => (
  <MaterialCommunityIcons 
    name='cart' 
    size={30} 
    />)
};

const OffersTab = createStackNavigator({
  OffrsTb : OffersScreen
});
OffersTab.navigationOptions = {
  tabBarLabel : "Special Offers",
  tabBarIcon : ({focused}) => (
    <SimpleLineIcons
      focused = {focused}
      name='exclamation'
      size={30}
    />
  )
};

const CategoryTab = createStackNavigator({
  CtgryTb : CategoryScreen
});
CategoryTab.navigationOptions = {
  tabBarLabel : "Categories",
  tabBarIcon : ({focused}) => (
    <MaterialCommunityIcons
      name='food'
      size={32}
    />
  )
};

const ResturantTab = createStackNavigator({
  RstrntTb : ResturantScreen
});
ResturantTab.navigationOptions = {
  tabBarLabel : "Resturants",
  tabBarIcon : ({focused}) => (
    <Ionicons
      focused={focused}
      name='ios-restaurant'
      size={32}
    />
  )
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ResturantTab,
  CategoryTab,
  OffersTab,
  CartTab,
  StatusTab
});
