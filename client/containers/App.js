import { h } from 'preact'

import appStyle from '../styles/appStyle'
import appNameStyle from '../styles/header/appNameStyle'

export default function App ({ children }) {
  return (
    <div style={appStyle}>
      <h1 style={appNameStyle}>Coop Cart</h1>
      {children}
      <p><small>
        hand-made by <a href='https://github.com/matannoam'>Matan Noam Shavit</a>.
      </small></p>
    </div>
  )
}
