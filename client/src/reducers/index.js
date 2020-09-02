import {combineReducers} from 'redux'

import boardsReducer from './boardsReducer'
import listsReducer from './listsReducer'
import cardsReducer from './cardsReducer'
import userReducer from './userReducer'
import oneBoardReducer from './oneBoardReducer'

const rootReducer = combineReducers({
  boards: boardsReducer,
  oneBoard: oneBoardReducer,
  lists: listsReducer,
  cards: cardsReducer,
  userReducer,
})

export default rootReducer