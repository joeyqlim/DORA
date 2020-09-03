import React, { Component } from "react";
import compassImg from '../assets/compass.png'
import { Container, Form, Button, Grid, Image } from 'semantic-ui-react'
import axios from "axios";
import { Redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;
class AddListPage extends Component {
  state = {
    title: "",
    status: false,
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    let token = localStorage.getItem("token");

    axios.post(`${URL}/list/${this.props.match.params.boardId}/new`, this.state, {
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
      return <Redirect to={`/board/${this.props.match.params.boardId}`} />;
    }
    console.log(this.props.match.params.boardId)

    return (
      <Container>
      <Grid className="centered">
      <Grid.Row>
        <Grid.Column width={4}>
          <Image size="medium" src={compassImg}/>
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={5}>
          <h1>New List</h1>
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

            <Button type="submit">Add list to board</Button>  
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
    );
  }
}

export default AddListPage;