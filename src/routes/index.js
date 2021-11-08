import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import VerifyConsumer from '../pages/VerifyConsumer'
import SelectImage from '../pages/SelectImage'

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={SelectImage} />
      <Route path='/verify' component={VerifyConsumer} />
    </Switch>
  </Router>
)

export default Routes
