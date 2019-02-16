import { GET_LGAS } from '../actions/types'
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
