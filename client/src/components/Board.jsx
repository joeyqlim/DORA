import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export const Board = ({ board }) => (
  <Card header={board.name}>
    <Link to={`/board/${board._id}`}>View Board</Link>
  </Card>
)