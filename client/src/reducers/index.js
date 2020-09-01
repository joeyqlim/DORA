import {combineReducers} from 'redux'

import boardsReducer from './boardsReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  boards: boardsReducer,
  userReducer,
})

export default rootReducer