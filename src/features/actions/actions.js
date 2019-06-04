import axios from 'axios'
import { URL } from '../base/utils/constants'
import {
  GET_LOCATIONS,
  ADD_LOCATION,
  DELETE_LOCATION,
  GET_LGAS,
  ADD_UPDATE,
  GET_UPDATES,
  DELETE_UPDATE,
} from './actionTypes'

export const getLgas = () => async dispatch => {
  const response = await axios.get(`${URL}/lga`)
  dispatch({
    type: GET_LGAS,
    payload: response.data,
  })
}

export const getLocations = () => async dispatch => {
  const response = await axios.get(`${URL}/location`)
  dispatch({
    type: GET_LOCATIONS,
    payload: response.data,
  })
}

export const addLocation = location => async dispatch => {
  const response = await axios.post(`${URL}/location`, location)
  dispatch({
    type: ADD_LOCATION,
    payload: response.data,
  })
}

export const deleteLocation = id => async dispatch => {
  await axios.delete(`${URL}/location/${id}`)
  dispatch({
    type: DELETE_LOCATION,
    payload: id,
  })
}
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
