import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import DashboardPage from './pages/DashboardPage'
import BoardsPage from './pages/BoardsPage'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
//import {autoLogin} from './actions/userActions'

class App extends Component {
  componentDidMount() {
    //this.props.autoLogin();
  }

  render() {
    return (
      <Router>
        {!this.props.userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {this.props.userReducer.user.username}</h1>}
        <RegisterComponent/>
        <LoginComponent/>
        <button>Logout</button>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/boards" component={BoardsPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     autoLogin: () => dispatch(autoLogin())
//   }
// }

export default connect(mapStateToProps)(App);