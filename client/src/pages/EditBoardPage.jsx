import React, { Component } from "react";
import globeImg from '../assets/globe.png'
import { Container, Form, Button, Grid, Image } from 'semantic-ui-react'
import axios from "axios";
import { Redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;
class EditBoardPage extends Component {
  state = {
    name: this.props.location.state.name,
    boardId: this.props.location.state.boardId,
    description: this.props.location.state.description,
    status: false,
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    let token = localStorage.getItem("token");

    axios.put(`${URL}/board/${this.state.boardId}`, this.state, {
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
        <Grid.Column width={4}>
          <Image size="medium" src={globeImg}/>
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={5}>
          <h1>Edit Board</h1>
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
            <Button type="submit" color="olive">Save changes</Button>  
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
    );
  }
}

export default EditBoardPage;