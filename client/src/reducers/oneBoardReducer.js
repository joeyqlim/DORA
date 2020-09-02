import * as actions from '../actions/oneBoardActions';

export const initialState = {
  board: {},
  loading: false,
  hasErrors: false,
}

export default function oneBoardReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ONE_BOARD:
      return { ...state, loading: true }
    case actions.GET_ONE_BOARD_SUCCESS:
      return { board: action.payload, loading: false, hasErrors: false }
    case actions.GET_ONE_BOARD_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
