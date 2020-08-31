import * as actions from '../actions/boardsActions';

export const initialState = {
  boards: [],
  loading: false,
  hasErrors: false,
}

export default function boardsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOARDS:
      return { ...state, loading: true }
    case actions.GET_BOARDS_SUCCESS:
      return { boards: action.payload, loading: false, hasErrors: false }
    case actions.GET_BOARDS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
