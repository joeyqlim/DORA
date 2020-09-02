import axios from 'axios';

const URL = process.env.REACT_APP_URL;

// Create Redux action types
export const GET_CARDS = 'GET_CARDS'
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
export const GET_CARDS_FAILURE = 'GET_CARDS_FAILURE'

// Create Redux action creators that return an action
export const getBoards = () => ({
  type: GET_CARDS,
})

export const getBoardsSuccess = (cards) => ({
  type: GET_CARDS_SUCCESS,
  payload: cards,
})

export const getBoardsFailure = () => ({
  type: GET_CARDS_FAILURE,
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
      dispatch(getBoardsSuccess(response.data.allBoards.cards));

    } catch (error) {
      dispatch(getBoardsFailure());
    }
  }
}