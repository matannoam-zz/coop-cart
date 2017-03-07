import { h } from 'preact'
import { bindActionCreators } from 'redux'
import { connect } from 'preact-redux'

import * as actions from '../actions';

function ProductList ({
  products,
  changeProducts
}) {
  return (
    <ul>
      {
        products.map((product) =>
          <li>{product.name}</li>
        )
      }
    </ul>
  )
}

function mapStateToProps(state) {
  const products = state.products.products
  return {
    products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeProducts: bindActionCreators(actions.setProducts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
