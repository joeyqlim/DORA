import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import BoardsPage from './pages/BoardsPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/boards" component={BoardsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App