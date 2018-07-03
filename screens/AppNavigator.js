// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import CartScreen from './Cart';

export const AppNavigator = StackNavigator({
  Main: { screen: CartScreen },
}, {
  initialRouteName: 'Main',
});
  
const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={{ dispatch, state: nav }}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});
  
export default connect(mapStateToProps)(AppWithNavigationState);