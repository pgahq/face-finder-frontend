import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Welcome from '../pages/Welcome'
import VerifyConsumer from '../pages/VerifyConsumer'

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Welcome} />
      <Route path='/consumer' component={VerifyConsumer} />
    </Switch>
  </Router>
)

export default Routes
