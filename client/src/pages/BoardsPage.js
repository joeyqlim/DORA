import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { fetchBoards } from '../actions/boardsActions';
import { Board } from '../components/Board';
import Spinner from '../components/Spinner';

import { Card, Container, Divider, Icon, Button } from 'semantic-ui-react'

const BoardsPage = ({ dispatch, loading, boards, hasErrors, userReducer }) => {
  useEffect(() => {
    dispatch(fetchBoards())
  }, [dispatch]);

  // Show loading, error or success state
  const renderBoards = () => {
    if (loading) return <Spinner />
    if (hasErrors) return <p>Unable to display boards</p>
    return boards.map((board, i) => <Board key={i} board={board} />)
  }

  return (
    <Container style={{ marginBottom: '3em' }}>
    {!userReducer.loggedIn ? "" : <h1><span role="img" aria-label="wave">👋</span> Welcome, {userReducer.user.username}!</h1>}
      <Card.Group itemsPerRow={3}>
        {renderBoards()}
        <Card>
        <Card.Content textAlign="center" >
          <Card.Header content="New board" />
          <Divider />
          <span role="img" aria-label="sparkle">✨</span>
        </Card.Content>
        <Button color='green'><Link to="/addboard">Add Board <Icon name='add' /></Link></Button>
      </Card>
      </Card.Group>
    </Container>
  )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.boards.loading,
  boards: state.boards.boards,
  hasErrors: state.boards.hasErrors,
  userReducer: state.userReducer
})

export default connect(mapStateToProps)(BoardsPage)