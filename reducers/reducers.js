import { combineReducers } from 'redux'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
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
    console.log(state.items.filter(item => action.item.name != item.item.name))
    // console.log(action.item.name)
      return Object.assign({}, state, {
        items: state.items.filter(item => action.item.name != item.item.name),
        count: state.count - 1
      })



    default:
      return state
  }
}

const manageCartReducer = combineReducers({
  manageCart,
})

export default manageCartReducer