import { TOGGLE_SIDEBAR, GET_SIDEBAR_STATE } from './types'

export const toggleSidebar = () => dispatch => {
  dispatch({
    type: TOGGLE_SIDEBAR,
  })
}

export const getSidebarState = () => dispatch => {
  dispatch({
    type: GET_SIDEBAR_STATE,
  })
}
