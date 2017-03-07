import { h } from 'preact'
import { Link } from 'preact-router'

import ProductList from '../components/ProductList'

export default function MainPage () {
  return (
    <div>
      <ProductList />
    </div>
  )
}
