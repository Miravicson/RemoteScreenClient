import axios from 'axios'

import { AVERAGE_PRICE, LOCATION_RECENT } from './utils/constants'
import { GET_AVERAGE_PRICE, GET_LOCATION_RECENT } from './actionTypes'

export const getAveragePrice = () => async dispatch => {
  const response = await axios.get(AVERAGE_PRICE)
  dispatch({
    type: GET_AVERAGE_PRICE,
    payload: response.data,
  })
}
export const getLocationRecent = () => async dispatch => {
  const response = await axios.get(LOCATION_RECENT)
  dispatch({
    type: GET_LOCATION_RECENT,
    payload: response.data,
  })
}
