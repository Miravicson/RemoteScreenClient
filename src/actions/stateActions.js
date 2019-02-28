import { GET_STATES } from './types'
import axios from 'axios'
import { URL } from '../ApiEndpoint'

export const getStates = () => async dispatch => {
  const response = await axios.get(`${URL}/state`)
  dispatch({
    type: GET_STATES,
    payload: response.data,
  })
}
