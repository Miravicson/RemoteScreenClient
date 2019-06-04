import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  AUTHENTICATE_USER,
} from './actionTypes'
import axios from 'axios'

export function signInUser(userCred) {
  return dispatch => {
    axios
      .post(`/auth/login`, userCred)
      .then(function(res) {
        let data = res.data
        sessionStorage.setItem(
          'remote-screen-token',
          JSON.stringify(data.access_token)
        )
        axios.defaults.headers.common['Authorization'] = `Bearer ${
          data.access_token
        }`

        dispatch({ type: AUTHENTICATE_USER })
      })
      .catch(function(error) {
        console.log(error)
        dispatch(failure(error))
      })
  }

  function request(userCred) {
    return { type: SIGNIN_REQUEST, userCred }
  }
  function success(user) {
    return { type: SIGNIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: SIGNIN_FAILURE, error }
  }
}
