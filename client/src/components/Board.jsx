import React from 'react'
import { Card, Button, Icon, Divider } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export const Board = ({ board }) => (
  <Card>
    <Card.Content textAlign="center" >
      <Card.Header content={board.name} />
      <Divider />
      <p>{board.description}</p>

    </Card.Content>
    <Button.Group>
      <Button color='violet'>
        <Link 
          to={{
            pathname: `/editboard`,
            state: {
              name: board.name,
              boardId: board._id,
              description: board.description,
            }
            }}>
        Edit <Icon name='edit' />
        </Link>
      </Button>
      <Button color='teal'><Link to={`/board/${board._id}`}>View <Icon name='eye' /></Link></Button>
    </Button.Group>
  </Card>
  
  
)