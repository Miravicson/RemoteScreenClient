import { GET_STATES } from './actionTypes'
import axios from 'axios'
import { URL } from '../base/utils/constants'

export const getStates = () => async dispatch => {
  const response = await axios.get(`${URL}/state`)
  dispatch({
    type: GET_STATES,
    payload: response.data,
  })
}
