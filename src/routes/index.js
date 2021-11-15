import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import VerifyConsumer from '../pages/VerifyConsumer'
import SelectEvent from '../pages/SelectEvent'
import ViewPhoto from '../pages/ViewPhoto'

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={VerifyConsumer} />
      <Route path='/events/:eventId/photos' component={ViewPhoto} />
      <Route path='/events' component={SelectEvent} />
    </Switch>
  </Router>
)

export default Routes
