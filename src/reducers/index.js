import { combineReducers } from 'redux'
import stateReducer from './stateReducer'
import lgaReducer from './lgaReducer'
import locationReducer from './locationReducer'
import updateReducer from './updateReducer'

export default combineReducers({
  state: stateReducer,
  lga: lgaReducer,
  location: locationReducer,
  update: updateReducer,
})
