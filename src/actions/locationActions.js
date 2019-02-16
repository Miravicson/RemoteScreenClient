import { GET_LOCATIONS, ADD_LOCATION, DELETE_LOCATION } from './types'
import axios from 'axios'
import { URL } from '../ApiEndpoint'

export const getLocations = () => async dispatch => {
  const response = await axios.get(`${URL}api/location`)
  dispatch({
    type: GET_LOCATIONS,
    payload: response.data,
  })
}

export const addLocation = location => async dispatch => {
  const response = await axios.post(
    `${URL}api/location`,
    location
  )
  dispatch({
    type: ADD_LOCATION,
    payload: response.data,
  }) 
}

export const deleteLocation = id => async dispatch => {
  await axios.delete(`${URL}api/location/${id}`)
  dispatch({
    type: DELETE_LOCATION,
    payload: id,
  })
}
