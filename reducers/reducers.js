import { combineReducers } from 'redux'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  ADD_CUSTOMER,
  REMOVE_CUSTOMER,
  ADD_DRIVER,
  REMOVE_DRIVER,
  ADD_RESTAURANT,
  REMOVE_RESTAURANT
} from '../actions/actions'




const initialState = {
  location: null,
  items: [],
  count:0,
  customer: {},
  restaurant: {},
  driver: {}
}


function manageCart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            item: action.item,
          }
        ],
        count: state.count + 1
      })

    case REMOVE_FROM_CART:
      return Object.assign({}, state, {
        items: state.items.filter(item => action.item.name != item.item.name),
        count: state.count - 1
      })

    case EMPTY_CART:
      return Object.assign({}, state, {
        items: [],
        count: 0
      })

    case ADD_CUSTOMER:
      return Object.assign({}, state, {

        customer: action.customer
      })

    case REMOVE_CUSTOMER:
      return Object.assign({}, state, {
        customer: {}
      })

    case ADD_DRIVER:
      return Object.assign({}, state, {
        driver: action.driver
      })

    case REMOVE_DRIVER:
      return Object.assign({}, state, {
        driver: {}
      })

    case ADD_RESTAURANT:
      return Object.assign({}, state, {
        restaurant: action.restaurant
      })

    case REMOVE_RESTAURANT:
      return Object.assign({}, state, {
        restaurant: {}
      })



    default:
      return state
  }
}

const manageCartReducer = combineReducers({
  manageCart,
})

export default manageCartReducer