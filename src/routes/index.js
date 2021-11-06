import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Welcome from '../pages/Welcome'
import Consumer from '../pages/Consumer'

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Welcome} />
      <Route path='/consumer' component={Consumer} />
    </Switch>
  </Router>
)

export default Routes
