import { GET_LOCATIONS, ADD_LOCATION, DELETE_LOCATION } from '../actions/types'
const initialState = {
  locations: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload
      }
    case ADD_LOCATION:
      return {
        ...state,
        locations: [action.payload, ...state.locations],
      }
    case DELETE_LOCATION:
      return {
        ...state,
        locations: state.locations.filter(
          location => location.id !== action.payload
        ),
      }
    default:
      return state
  }
}
