// //import * as actions from '../actions/boardsActions';

// export const initialState = {
//   cards: [],
//   loading: false,
//   hasErrors: false,
// }

// export default function cardsReducer(state = initialState, action) {
//   switch (action.type) {
//     case actions.GET_CARDS:
//       return { ...state, loading: true }
//     case actions.GET_CARDS_SUCCESS:
//       return { cards: action.payload, loading: false, hasErrors: false }
//     case actions.GET_CARDS_FAILURE:
//       return { ...state, loading: false, hasErrors: true }
//     default:
//       return state
//   }
// }
