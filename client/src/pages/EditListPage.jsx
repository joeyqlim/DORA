import React, { Component } from "react";
import { Container, Form, Button, Grid } from 'semantic-ui-react'
import axios from "axios";
import { Redirect } from "react-router-dom";

const URL = "api" || process.env.REACT_APP_URL;
class EditListPage extends Component {
  state = {
    title: this.props.location.state.title,
    boardId: this.props.location.state.boardId,
    listId: this.props.location.state.listId,
    status: false,
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    let token = localStorage.getItem("token");

    axios.put(`${URL}/list/${this.state.listId}`, this.state, {
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
      return <Redirect to={`/board/${this.state.boardId}`} />;
    }

    return (
      <Container>
      <Grid className="centered">
      <Grid.Row>
        <Grid.Column width={5}>
          <h1>Edit List</h1>
          <Form onSubmit={this.submitHandler}>
            <Form.Field>
            <input 
                type="text" 
                name="title" 
                placeholder="List title" 
                value={this.state.title}
                onChange={this.changeHandler}
            />
            </Form.Field>

            <Button type="submit" color="olive">Save changes</Button>  
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
    );
  }
}

export default EditListPage;