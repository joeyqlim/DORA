import React, { Component } from "react";
import { Container, Form, Button, Grid } from 'semantic-ui-react'
import axios from "axios";
import { Redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;
class EditCardPage extends Component {
  state = {
    content: this.props.location.state.content,
    boardId: this.props.location.state.boardId,
    status: false,
  };
  
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    let token = localStorage.getItem("token");

    axios.put(`${URL}/card/${this.props.match.params.cardId}`, this.state, {
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
          <h1>New Card</h1>
          <Form onSubmit={this.submitHandler}>
            <Form.Field>
            <input 
                type="text" 
                name="content" 
                placeholder="Content" 
                value={this.state.content}
                onChange={this.changeHandler}
            />
            </Form.Field>

            <Button type="submit" color="olive">Add card to list</Button>  
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
    );
  }
}

export default EditCardPage;