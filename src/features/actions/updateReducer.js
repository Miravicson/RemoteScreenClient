import { ADD_UPDATE, GET_UPDATES, DELETE_UPDATE } from './actionTypes'

const initialState = {
  updates: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_UPDATE:
      return {
        ...state,
        updates: [action.payload, ...state.updates],
      }
    case GET_UPDATES:
      return {
        ...state,
        updates: action.payload,
      }
    case DELETE_UPDATE:
      return {
        ...state,
        updates: [
          ...state.updates.filter(update => update.id !== action.payload),
        ],
      }
    default:
      return {
        ...state,
      }
  }
}
