import { combineReducers } from 'redux'
import stateReducer from './stateReducer'
import lgaReducer from './lgaReducer'
import locationReducer from './locationReducer'
import updateReducer from './updateReducer'
import sidebarReducer from './sidebarReducer'
import recentReducer from './recentReducer'
import mixReducer from './mixReducer'

export default combineReducers({
  state: stateReducer,
  lga: lgaReducer,
  location: locationReducer,
  update: updateReducer,
  sidebar: sidebarReducer,
  recent: recentReducer,
  mix: mixReducer,
})
