import React from 'react';
import { Card, Segment, Divider, Icon, Button } from 'semantic-ui-react'

import CardComponent from './CardComponent'

function List({list}) {
  const square = { width: 135, height: 135 }

  const renderLists = () => {
    return list.cards.map((card, i) => (
      <CardComponent key={i} card={card} />
    ))
  }
  return (
      <>
      <Segment color='teal' raised fluid style={{ padding: '1em' }}>
        <span as='h2'>{list.title}</span> 
        <Button.Group floated='right'>
        <Button basic color='red'>
          <Icon name='delete' />
        </Button>
        <Button basic color='blue'>
          <Icon name='edit' />
        </Button>

      </Button.Group>
        <Divider hidden />
          <Card.Group itemsPerRow={6}>
          <Segment circular style={square} inverted color='grey'>
            Add an activity<br/><Icon name='add' />
          </Segment>
          {renderLists()}
          </Card.Group>
      </Segment>      
      <Divider />
      </>
  );
}

export default List;
