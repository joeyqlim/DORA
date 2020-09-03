import React from 'react';
import { Card, Segment, Divider, Icon, Button, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import CardComponent from './CardComponent'

function List({list}) {
  const square = { width: 135, height: 135, marginTop: "1em", marginBottom: "1.5em", marginLeft: "1.5em" }

  const renderLists = () => {
    return list.cards.map((card, i) => (
      <CardComponent key={i} card={card} boardId={list.board}/>
    ))
  }
  return (
      <>
      <Segment color='purple' raised fluid style={{ padding: '1em' }}>
        <h3>{list.title}</h3> 
        <Button.Group floated='right' vertical widths='1'>
        <Popup content='Delete this list' trigger={<Button color='red' icon='delete' />} />
        <Popup content='Edit this list' trigger={
          <Button 
            color='blue' 
            icon='edit'
            as={Link} 
            to={{
              pathname: `/editlist`,
              state: {
                title: list.title,
                boardId: list.board,
                listId: list._id
              }
              }}
            />
            } />

      </Button.Group>
        <Divider hidden />
          <Card.Group itemsPerRow={6}>
          <Segment circular style={square} inverted color='purple' as={Link} 
            to={{
              pathname: `/addcard/${list.board}/${list._id}`
              }}>
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
