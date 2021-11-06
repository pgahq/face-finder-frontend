import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import VerifyConsumer from '../pages/VerifyConsumer'

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' component={VerifyConsumer} />
    </Switch>
  </Router>
)

export default Routes
