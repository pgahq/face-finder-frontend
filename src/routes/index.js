import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Welcome from '../pages/Welcome'

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' component={Welcome} />
    </Switch>
  </Router>
)

export default Routes
