import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Segment } from 'semantic-ui-react'


function CardComponent({card}) {
  const square = { width: 135, height: 135 }

  return (  
    <Segment circular style={square} inverted color='teal'>
      {card.content}
    </Segment>
  );
}

export default CardComponent;
