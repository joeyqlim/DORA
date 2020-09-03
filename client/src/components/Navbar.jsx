import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {logUserOut} from '../actions/userActions'


class Navbar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logoutHandler = (e) => {
    e.preventDefault()
    this.props.logUserOut()
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const navColor = window.scrollY > 33 ? "rgb(0, 0, 0, .6)" : "rgb(0, 0, 0, 1)";

      this.setState({ navColor });
    });
  }
  

  render() {
    const { activeItem } = this.state

    return (
      <Segment>
        <Menu fixed='top' inverted size='massive' style={{ backgroundColor: this.state.navColor}} >
          <Menu.Item>DORA</Menu.Item>
          {!this.props.userReducer.loggedIn ?  
          <Menu.Item
          as={NavLink} to="/login"
          name='log in'
          active={activeItem === 'log in'}
          onClick={this.handleItemClick}
        />
        : 
          <Menu.Item
          as={NavLink} to="/home"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          />
          }

          {!this.props.userReducer.loggedIn ?  
          <Menu.Item
          as={NavLink} to="/register"
          name='register'
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
        />
          : 
          <Menu.Item
          as={NavLink} to="/logout"
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.logoutHandler}
          />
          }
          
        </Menu>
      </Segment>
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
      logUserOut: () => dispatch(logUserOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);