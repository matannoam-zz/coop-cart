import { combineReducers } from 'redux'
import { routerReducer } from 'preact-router-redux/lib/reducer'
import products from './products'

export default combineReducers({
  products,
  routing: routerReducer
})
