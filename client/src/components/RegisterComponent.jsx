import React from 'react'
import {connect} from 'react-redux'
import {signUserUp} from '../actions/userActions'

import { Container, Form, Button, Grid } from 'semantic-ui-react'

class SignUpComponent extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.signUserUp(this.state)
    }

    render(){
        return(
            <Container>
                <Grid className="centered">
                <Grid.Row>
                    <Grid.Column width={5}>
                        <h1 style={{ color: "white"}}>Register</h1>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Field>
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Username" 
                                value={this.state.username}
                                onChange={this.handleOnChange}
                            />
                            </Form.Field>

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

                            <Form.Field>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={this.state.confirmPassword}
                                onChange={this.handleOnChange}
                            />
                            </Form.Field>
                            <Button type="submit" inverted floated="right">Register</Button>
                            
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
        signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(SignUpComponent)