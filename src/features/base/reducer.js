import { GET_AVERAGE_PRICE, GET_LOCATION_RECENT } from './actionTypes'

const initialState = {
  averagePrice: {
    AGO: 0,
    DPK: 0,
    PMS: 0,
  },
  locationRecent: [],
  isAuthenticated:
    false || (sessionStorage.getItem('remote-screen-token') ? true : false),
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
        locationRecent: action.payload,
      }
    default:
      return state
  }
}
