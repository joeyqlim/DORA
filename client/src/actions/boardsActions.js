import axios from 'axios';

const URL = process.env.REACT_APP_URL;

// Create Redux action types
export const GET_BOARDS = 'GET_BOARDS'
export const GET_BOARDS_SUCCESS = 'GET_BOARDS_SUCCESS'
export const GET_BOARDS_FAILURE = 'GET_BOARDS_FAILURE'

// Create Redux action creators that return an action
export const getBoards = () => ({
  type: GET_BOARDS,
})

export const getBoardsSuccess = (boards) => ({
  type: GET_BOARDS_SUCCESS,
  payload: boards,
})

export const getBoardsFailure = () => ({
  type: GET_BOARDS_FAILURE,
})

// Combine all action creators in an async thunk
export function fetchBoards() {
  return async (dispatch) => {
    dispatch(getBoards());
    let token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${URL}/board/all`, {
        headers: {
          'x-auth-token' : token
        }
      });
      console.log(response.data)

      //const data = await response.json();
      dispatch(getBoardsSuccess(response.data.allBoards.boards));

    } catch (error) {
      dispatch(getBoardsFailure());
    }
  }
}