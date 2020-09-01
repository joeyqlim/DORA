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

    try {
      // hard coded for testing
      const response = await axios.get(`${URL}/board/all`, {
        headers: {
          'x-auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY0YTE1OTFhMjVhYzYyNTBjYWU1ZjRhIn0sImlhdCI6MTU5ODg1OTc3MywiZXhwIjoxOTU4ODU5NzczfQ._PdJTX0CzG6yg6j4QDqhrPbRcPZeRKRHQK2GGk7DVqQ'
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