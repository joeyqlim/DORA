import React from 'react'
import { Header, Segment, Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <Segment style={{ padding: '1em 0em', color: "white" }} vertical>
      <Grid container stackable verticalAlign='middle' centered >
        <Grid.Row>
          <Grid.Column width={8} textAlign="center">
            <Header as='h1' style={{ fontSize: '6em', color: "white" }} >
              DORA
            </Header>
            <p style={{ fontSize: '1.5em' }}>
              A travel planner app for the flexible, yet organized traveler.
            </p>
            <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
              Itinerary Planning Can Be Fun
            </Header>
            <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
              You Don't Have To Use Excel Spreadsheets
            </Header>
            <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
              Visualize Your Hopes And Dreams Today
            </Header>
          </Grid.Column>
          {/* <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column> */}
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' color="pink" style={{marginTop: "1em"}} as={Link} to={{
              pathname: `/login`
              }}>I'm ready to explore the world</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
)

export default LandingPage