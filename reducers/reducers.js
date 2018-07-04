import { combineReducers } from 'redux'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from '../actions/actions'




const initialState = {
  location: null,
  items: [],
  count:0,
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



    default:
      return state
  }
}

const manageCartReducer = combineReducers({
  manageCart,
})

export default manageCartReducer