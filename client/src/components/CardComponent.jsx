import React from 'react';
import { Icon, Segment } from 'semantic-ui-react'

function CardComponent({card}) {
  const square = { width: 135, height: 135 }

  return (  
    
    <Segment circular style={square} inverted color='teal'>
      {card.content}<br />
      <span><Icon name='edit' /></span>
      <span><Icon name='delete' /></span>
    </Segment>
  );
}

export default CardComponent;
