import React from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Icon
} from 'semantic-ui-react'

const Footer = () => (
  <div>
    <Segment inverted vertical style={{ margin: '15em 0em 0em', padding: '2em 0em', backgroundColor: 'rgba(0, 0, 0, .6)'}}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          
          <Grid.Column width={16}>
            <Header inverted as='h4' content='DORA' />
            <p>
              made for explorers <span role="img" aria-label="white-heart">🤍</span>
            </p>
          </Grid.Column>
        </Grid>

        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='https://github.com/joeyqlim/'>
            <Icon name='github' size='big' />
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default Footer