import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBoards } from '../actions/boardsActions';
import { Board } from '../components/Board';

import { Card, Container } from 'semantic-ui-react'

const BoardsPage = ({ dispatch, loading, boards, hasErrors, userReducer }) => {
  useEffect(() => {
    dispatch(fetchBoards())
  }, [dispatch]);

  // Show loading, error or success state
  const renderBoards = () => {
    if (loading) return <p>Loading boards...</p>
    if (hasErrors) return <p>Unable to display boards</p>
    return boards.map((board, i) => <Board key={i} board={board} />)
  }

  return (
    <Container>
    {!userReducer.loggedIn ? "" : <h1>Welcome, {userReducer.user.username}</h1>}
      <h1>Boards</h1>
      <Card.Group itemsPerRow={4}>
        {renderBoards()}
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