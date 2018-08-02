
//action types

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const EMPTY_CART = 'EMPTY_CART'
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
export const ADD_DRIVER = 'ADD_DRIVER'
export const REMOVE_DRIVER = 'REMOVE_DRIVER'
export const ADD_RESTAURANT = 'ADD_RESTAURANT'
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT'


//other constants

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


//actions creaters

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function addToCart(item) {
  return { type: ADD_TO_CART, item }
}

export function removeFromCart(item) {
  return { type: REMOVE_FROM_CART, item }
}

export function emptyCart() {
  return { type: EMPTY_CART}
}

export function addCustomer(customer) {
  return { type: ADD_CUSTOMER, customer}
}

export function removeCustomer() {
  return { type: REMOVE_CUSTOMER}
}

export function addDriver(driver) {
  return { type: ADD_DRIVER, driver}
}

export function removeDriver() {
  return { type: REMOVE_DRIVER}
}

export function addRestaurant(restaurant) {
  return { type: ADD_RESTAURANT, restaurant}
}

export function removeRestaurant() {
  return { type: REMOVE_RESTAURANT}
}

