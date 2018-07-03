// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import { combineReducers } from 'redux';
import NavReducer from './NavReducer';

const AppReducer = combineReducers({
  nav: NavReducer,
});

export default AppReducer;