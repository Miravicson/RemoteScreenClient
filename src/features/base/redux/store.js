import { createStore } from 'redux'
import { MiddlewareRegistry, ReducerRegistry } from '../redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { sideBarReducer } from '../../sidebar'
import { stateReducer } from '../../state'
import { loginReducer } from '../../auth'
import { baseReducer } from '../'
import {
  lgaReducer,
  recentReducer,
  locationReducer,
  updateReducer,
} from '../../actions'
import Thunk from 'redux-thunk'

export default function initStore() {
  const reducer = ReducerRegistry.combineReducers({
    sidebar: sideBarReducer,
    state: stateReducer,
    base: baseReducer,
    recent: recentReducer,
    location: locationReducer,
    lga: lgaReducer,
    update: updateReducer,
    auth: loginReducer
  })
  let middleware = composeWithDevTools(
    MiddlewareRegistry._applyMiddleware(Thunk)
  )

  const store = createStore(reducer, middleware)
  return { store }
}
