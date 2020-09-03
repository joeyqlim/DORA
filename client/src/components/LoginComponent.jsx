import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions/userActions'

import { Container, Form, Button, Grid } from 'semantic-ui-react'

class LoginComponent extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.fetchUser(this.state)
    }

    render(){
        return(
            <Container>
                <Grid className="centered">
                <Grid.Row>
                    <Grid.Column width={5}>
                        <h1 style={{ color: "white"}}>Log In</h1>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Field>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Email" 
                                value={this.state.email}
                                onChange={this.handleOnChange}
                            />
                            </Form.Field>

                            <Form.Field>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleOnChange}
                            />
                            </Form.Field>
                            <Button type="submit" inverted floated="right">Log In</Button>
                            
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent)