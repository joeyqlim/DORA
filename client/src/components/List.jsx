import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Container, Card, Segment, Divider } from 'semantic-ui-react'

import CardComponent from './CardComponent'

function List({list}) {

  const renderLists = () => {
    return list.cards.map((card, i) => (
      <CardComponent key={i} card={card} />
    ))
  }
  return (
    <Container>
      <Grid.Row>
      <Segment color='teal' raised fluid>
        <h3>{list.title}</h3>
        <Divider hidden />
          <Card.Group itemsPerRow={4}>
          {renderLists()}
          </Card.Group>
      </Segment>
      </Grid.Row>
      <Divider />
    </Container>
  );
}

export default List;
