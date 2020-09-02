import React, { Component } from 'react'
import {BrowserRouter as Router, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BoardsPage from './pages/BoardsPage'
import BoardDetail from './components/BoardDetail'
import AddBoardPage from './pages/AddBoardPage'
import EditBoardPage from './pages/EditBoardPage'
import AddListPage from './pages/AddListPage'
import EditListPage from './pages/EditListPage'
import AddCardPage from './pages/AddCardPage'
import EditCardPage from './pages/EditCardPage'
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
        <Container style={{ marginBottom: '10em', marginTop: '3em' }}>
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
          <AuthRoute exact path="/addboard" component={AddBoardPage} type="private" />
          <AuthRoute exact path="/editboard" component={EditBoardPage} type="private" />
          <AuthRoute exact path="/editlist" component={EditListPage} type="private" />
          <AuthRoute exact path="/addlist/:boardId" render={(props) => <AddListPage {...props} /> } type="private" />
          <AuthRoute exact path="/addcard/:boardId/:listId" render={(props) => <AddCardPage {...props} /> } type="private" />
          <AuthRoute exact path="/editcard/:cardId" render={(props) => <EditCardPage {...props} /> } type="private" />

        </Switch>
        </Segment>
        </Container>
        <Footer />
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