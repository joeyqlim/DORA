import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
  Icon
} from 'semantic-ui-react'

const Footer = () => (
  <div>
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          
          <Grid.Column width={16}>
            <Header inverted as='h4' content='DORA' />
            <p>
              made with 🤍 by joey
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='https://github.com/joeyqlim/'>
            <Icon name='github' />
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default Footer