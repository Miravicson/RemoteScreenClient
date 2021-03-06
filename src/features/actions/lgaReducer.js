import { GET_LGAS } from './actionTypes'
const initialState = {
  lgas: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LGAS:
      return {
        ...state,
        lgas: action.payload
      }
    default:
      return state
  }
}
