import * as actionTypes from '../constants/actionTypes'

const initialState = {}

export default function(state = initialState, action) {
  if (action.type === actionTypes.PRODUCTS_SET) {
    return setProduct(state, action)
  }
  return state
}

function setProduct(state, action) {
  const { products } = action
  return {...state, products: products}
}
