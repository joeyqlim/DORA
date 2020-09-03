import React, { Component } from "react";
import { Container, Form, Button, Grid } from 'semantic-ui-react'
import axios from "axios";
import { Redirect } from "react-router-dom";

const URL = "/api"
class AddBoardPage extends Component {
  state = {
    name: "",
    description: "",
    status: false,
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    let token = localStorage.getItem("token");

    axios.post(`${URL}/board/new`, this.state, {
      headers: {
        'x-auth-token' : token
      }
    })
      .then((res) => {
        console.log("done");
        this.setState({ status: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.status) {
      return <Redirect to="/home" />;
    }

    return (
      <Container>
      <Grid className="centered">
      <Grid.Row>
        <Grid.Column width={5}>
          <h1>New Board</h1>
          <Form onSubmit={this.submitHandler}>
            <Form.Field>
            <input 
                type="text" 
                name="name" 
                placeholder="Board name" 
                value={this.state.name}
                onChange={this.changeHandler}
            />
            </Form.Field>

            <Form.Field>
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.changeHandler}
            />
            </Form.Field>
            <Button type="submit" color="olive">Create new board</Button>  
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
    );
  }
}

export default AddBoardPage;