import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Badge, Icon, Avatar } from 'react-native-material-ui';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import TabBarIcon from '../components/TabBarIcon';
import RestaurantList from '../screens/RestaurantList';
import CategoryScreen from '../screens/FoodCategories';
import ExploreScreen from '../screens/Explore';
import CartScreen from '../screens/Cart';
import ProfileScreen from '../screens/Profile';

// const ProfileTab = createStackNavigator({
//   ProfileTab : ProfileScreen
// });
// ProfileTab.navigationOptions = {
//   tabBarLabel : "Profile",
//   tabBarIcon : ({focused}) => (
//     <Feather 
//       name="user"
//       color="grey"
//       size={32}
//     />
//   )

// };

// const CartTab = createStackNavigator({
//   CartTab : CartScreen
// });
// CartTab.navigationOptions = {
//   tabBarLabel : "Orders",
//   tabBarIcon : ({focused}) => (
//     <Badge text="3" >
//   <MaterialCommunityIcons 
//     name='cart' 
//     color="grey"
//     size={30} 
//     />
//     </Badge>),
// };

// const ExploreTab = createStackNavigator({
//   ExploreTab : ExploreScreen
// });
// ExploreTab.navigationOptions = {
//   tabBarLabel : "Explore",
//   tabBarIcon : ({focused}) => (
//     <FontAwesome
//       focused = {focused}
//       name='wpexplorer'
//       color="grey"
//       size={30}
//     />
//   )
// };

// const CategoryTab = createStackNavigator({
//   CategoryTab : CategoryScreen
// });
// CategoryTab.navigationOptions = {
//   tabBarLabel : "Categories",
//   tabBarIcon : ({focused}) => (
//     <MaterialIcons
//       name='search'
//       color="grey"
//       size={32}
//     />
//   )
// };

// const RestaurantListTab = createStackNavigator({
//   RestaurantListTab : RestaurantList
// }); 
// RestaurantListTab.navigationOptions = {
//   tabBarLabel : "Restaurants",
//   tabBarIcon : ({focused}) => (
//     <Ionicons
//       focused={focused}
//       name='ios-restaurant'
//       size={32}
//       color="grey"
//     />
//   ),
//   header:null
// };


// export default createBottomTabNavigator({
//   RestaurantListTab,
//   CategoryTab,
//   ExploreTab,
//   CartTab,
//   ProfileTab
// });


export default createMaterialBottomTabNavigator({
  RestaurantList: { screen: RestaurantList,     
    navigationOptions: (navigation) => ({
       tabBarLabel : "Restaurants",
  tabBarIcon : ({focused}) => (
    <Ionicons
      focused={focused}
      name='ios-restaurant'
      size={25}
      // color="grey"
    />
  ),
  header:null
    }),
     },
  CategoryScreen: { screen: CategoryScreen },
  ExploreScreen: { screen: ExploreScreen },
  CartScreen: { screen: CartScreen },
  ProfileScreen: { screen: ProfileScreen },
}, {
  initialRouteName: 'CartScreen',
  activeTintColor: 'blue',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#dfdee0', height:'7%', alignItems:'center', justifyContent:'center'},
});


// export default class MainNavigation extends React.Component {

//     // static router = TabNavigator.router;



//     render() {
//       console.log(this.props.navigation.state.params)
//       // console.log('-----------------');
//       // console.log(this.props.navigation.params);
//       // console.log('-----------------');
//     return <TabNavigator />;//navigation={this.props.navigation} />;
//   }
// }