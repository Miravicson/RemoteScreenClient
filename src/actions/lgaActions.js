import { GET_LGAS } from './types'
import axios from 'axios'
import { URL } from '../ApiEndpoint'

export const getLgas = () => async dispatch => {
  const response = await axios.get(`${URL}/lga`)
  dispatch({
    type: GET_LGAS,
    payload: response.data,
  })
}
