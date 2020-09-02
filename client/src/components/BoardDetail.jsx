import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react'
import { fetchOneBoard } from '../actions/oneBoardActions';

function BoardDetail({ dispatch, loading, board, hasErrors, userReducer }) {
  const { boardId: boardId } = useParams();
  useEffect(() => {
    dispatch(fetchOneBoard(boardId))
  }, [dispatch]);

  // Show loading, error or success state
  const renderBoardDetail = () => {
    if (loading) return <p>Loading boards...</p>
    if (hasErrors) return <p>Unable to display boards</p>
    if (typeof board.lists === undefined) {
      return board.lists.map((list, i) => (<li key={i}>{list.title}</li>))
    } else {
      return <h3>No lists in this board yet. Create one?</h3>
    }
  }

  // fetch all lists in this board
  // render each list into a list component
  return (
    <Grid divided='vertically'>
      <h2>{board.name}</h2>
      {renderBoardDetail()}
      {board.lists}
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
