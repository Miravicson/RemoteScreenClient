import { GET_RECENT_UPDATE } from '../actions/types'

import axios from 'axios'
import { URL } from '../ApiEndpoint'

export const getRecent = locationSlug => async dispatch => {
  const response = await axios.get(`${URL}/recent/${locationSlug}`)
  dispatch({
    type: GET_RECENT_UPDATE,
    payload: response.data,
  })
}
