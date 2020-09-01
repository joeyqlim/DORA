import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'


class Navbar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment>
        <Menu pointing secondary size="massive">
          <Menu.Item>DORA</Menu.Item>
        {this.props.userReducer.loggedIn ?  
         <Menu.Item
          as={NavLink} to="/home"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        : ""
        }
          
          <Menu.Item
            as={NavLink} to="/login"
            name='log in'
            active={activeItem === 'log in'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink} to="/register"
            name='register'
            active={activeItem === 'register'}
            onClick={this.handleItemClick}
          />
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

export default connect(mapStateToProps)(Navbar);