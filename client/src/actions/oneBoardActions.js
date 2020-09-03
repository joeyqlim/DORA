import axios from 'axios';

const URL = "/api"

export const GET_ONE_BOARD = 'GET_ONE_BOARD'
export const GET_ONE_BOARD_SUCCESS = 'GET_ONE_BOARD_SUCCESS'
export const GET_ONE_BOARD_FAILURE = 'GET_ONE_BOARD_FAILURE'

export const getOneBoard = () => ({
  type: GET_ONE_BOARD,
})

export const getOneBoardSuccess = (board) => ({
  type: GET_ONE_BOARD_SUCCESS,
  payload: board,
})

export const getOneBoardFailure = () => ({
  type: GET_ONE_BOARD_FAILURE,
})

// fetch one board
export function fetchOneBoard(boardId) {
  return async (dispatch) => {
    dispatch(getOneBoard());
    let token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${URL}/board/${boardId}`, {
        headers: {
          'x-auth-token' : token
        }
      });
      console.log(response.data.board)

      dispatch(getOneBoardSuccess(response.data.board));

    } catch (error) {
      dispatch(getOneBoardFailure());
    }
  }
}