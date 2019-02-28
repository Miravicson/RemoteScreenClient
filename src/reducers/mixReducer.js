import { GET_AVERAGE_PRICE, GET_LOCATION_RECENT} from '../actions/types'

const initialState = {
  averagePrice: {},
  locationRecent: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AVERAGE_PRICE:
      return {
        ...state,
        averagePrice: action.payload,
      }
    case GET_LOCATION_RECENT:
      return {
        ...state,
        locationRecent: action.payload
      }
    default:
      return state
  }
}
