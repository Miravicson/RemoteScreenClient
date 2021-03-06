import { GET_RECENT_UPDATE } from './actionTypes'
const initialState = {
  recentUpdate: {}
}


export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECENT_UPDATE:
      return {
        ...state,
        recentUpdate: action.payload
      }
    default:
      return state
  }
}