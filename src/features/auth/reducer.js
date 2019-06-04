import { ReducerRegistry } from '../base/redux'
import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  AUTHENTICATE_USER,
} from './actionTypes'

let initialState = {
  profile: {},
  isAuthenticated:
    false || (sessionStorage.getItem('remote-screen-token') ? true : false),
}

// ReducerRegistry.register('features/auth', (state = initialState, action) => {
//   switch (action.type) {
//     case SIGNIN_REQUEST:
//       return state
//     case SIGNIN_SUCCESS:
//       return {
//         ...state,
//         profile: action.user,
//       }
//     default:
//       return state
//   }
// })

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return state
    case SIGNIN_SUCCESS:
      return {
        ...state,
        profile: action.user,
      }
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: true,
      }
    default:
      return state
  }
}
