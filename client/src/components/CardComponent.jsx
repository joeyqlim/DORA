import React from 'react';
import { Segment, Button, Popup, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function CardComponent({card, boardId}) {
  const square = { width: 135, height: 135, marginLeft: "1em" }
  return (  

    <Popup trigger={
      <Segment circular style={square} inverted color='teal'>
      {card.content}<br />
      </Segment>
    } flowing hoverable size='mini'>
    <Grid centered divided columns={2}>
      <Grid.Column textAlign='center'>
        <Button color="blue" icon="edit" size='mini' as={Link} 
        to={{
          pathname: `/editcard/${card._id}`,
          state: {
            content: card.content,
            boardId
          }
          }}/>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Button color="red" icon="delete" size='mini' />
      </Grid.Column>
    </Grid>
    </Popup>
  );
}

export default CardComponent;
