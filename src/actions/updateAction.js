import { ADD_UPDATE, GET_UPDATES, DELETE_UPDATE } from './types'
import axios from 'axios'
import { URL } from '../ApiEndpoint'

export const addUpdate = update => async dispatch => {
  const response = await axios.post(`${URL}/update`, update)
  dispatch({
    type: ADD_UPDATE,
    payload: response.data,
  })
}
export const getUpdates = () => async dispatch => {
  const response = await axios.get(`${URL}/update`)
  dispatch({
    type: GET_UPDATES,
    payload: response.data,
  })
}

export const deleteUpdate = id => async dispatch => {
  await axios.delete(`${URL}/update/${id}`)
  dispatch({
    type: DELETE_UPDATE,
    payload: id,
  })
}