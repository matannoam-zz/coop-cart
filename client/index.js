import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import { Router, Route } from 'preact-router'
import syncHistoryWithStore from 'preact-router-redux/lib/sync'

import browserHistory from './lib/browserHistory'
import configureStore from './stores/configureStore'

import * as actions from './actions'
import App from './containers/App'
import MainPage from './containers/MainPage'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(actions.setProducts([{name: 'Product 1'}]))

render(
  <Provider store={store}>
    <App>
      <Router history={history}>
        <Route path="/" component={MainPage} default/>
      </Router>
    </App>
  </Provider>,
  document.getElementById('app')
)
