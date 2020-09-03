import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Grid, Card, Container, Button, Icon } from 'semantic-ui-react'
import { fetchOneBoard } from '../actions/oneBoardActions';

import List from './List';
import Spinner from '../components/Spinner';

const BoardDetail = ({ dispatch, loading, board, hasErrors }) => {
  const { boardId } = useParams();
  useEffect(() => {
    dispatch(fetchOneBoard(boardId))
  }, [dispatch, boardId]);

  // Show loading, error or success state
  const renderBoardDetail = () => {
    if (loading) return <Spinner />
    if (hasErrors) return <p>Unable to display boards</p>
    if (board.lists) {
      if (board.lists.length > 0) {
        return board.lists.map((list, i) => (
          <List key={i} list={list} />
        ))
      } else {
        return <h3>No lists in this board yet. Create one?</h3>
      }
    } 
  }

  // fetch all lists in this board
  // render each list into a list component
  return (
    <Grid padded divided='vertically' style={{ margin: '.1em .1em 3em .1em' }}>
      <h2>{board.name}</h2>
      <Container>
      <Grid.Row>
      {renderBoardDetail()}
      <Card fluid={true}>
        <Card.Content textAlign="center" >
          <Card.Header content="Add a new list to this board" />
        </Card.Content>
        <Button color='green'><Link to={`/addlist/${board._id}`}>Add List <Icon name='add' /></Link></Button>
      </Card>
      </Grid.Row>
    </Container>
    </Grid>
  );
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.oneBoard.loading,
  board: state.oneBoard.board,
  hasErrors: state.oneBoard.hasErrors,
  userReducer: state.userReducer
})

export default connect(mapStateToProps)(BoardDetail);
