import axios from 'axios';

const URL = process.env.REACT_APP_URL;

// Create Redux action types
export const GET_LISTS = 'GET_LISTS'
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS'
export const GET_LISTS_FAILURE = 'GET_LISTS_FAILURE'

// Create Redux action creators that return an action
export const getBoards = () => ({
  type: GET_LISTS,
})

export const getBoardsSuccess = (lists) => ({
  type: GET_LISTS_SUCCESS,
  payload: lists,
})

export const getBoardsFailure = () => ({
  type: GET_LISTS_FAILURE,
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
      dispatch(getBoardsSuccess(response.data.allBoards.lists));

    } catch (error) {
      dispatch(getBoardsFailure());
    }
  }
}