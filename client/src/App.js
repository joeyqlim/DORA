import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {connect} from 'react-redux'

import Navbar from './components/Navbar'
import BoardsPage from './pages/BoardsPage'
import BoardDetail from './components/BoardDetail'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
import AuthRoute from './components/AuthRoute'
import {autoLogin} from './actions/userActions'

import { Container, Segment } from 'semantic-ui-react'

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Container>
        <Segment>
        <Switch>
          <AuthRoute exact path="/" type="guest">
            <LoginComponent />
          </AuthRoute>
          <AuthRoute exact path="/login" type="guest">
            <LoginComponent />
          </AuthRoute>
          <AuthRoute exact path="/register" type="guest">
            <RegisterComponent />
          </AuthRoute>

          <AuthRoute exact path="/home" component={BoardsPage} type="private" />
          <AuthRoute exact path="/board/:boardId" component={BoardDetail} type="private" />

        </Switch>
        </Segment>
        </Container>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);