import * as actionTypes from '../constants/actionTypes'

export function setProducts (products) {
  return {
    type: actionTypes.PRODUCTS_SET,
    products
  }
}
