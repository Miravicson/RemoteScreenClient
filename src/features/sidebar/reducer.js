import { TOGGLE_SIDEBAR, GET_SIDEBAR_STATE } from './actionTypes'
const initialState = {
  active: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SIDEBAR_STATE:
      return {
        ...state,
      }
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        active: !state.active,
      }

    default:
      return state
  }
}
