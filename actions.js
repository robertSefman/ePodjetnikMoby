import {login} from './api'

// action types
const LOG_IN_SENT = 'LOG_IN_SENT'
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'
export const UPDATE_PARTNER = 'UPDATE_PARTNER'

// action creator
export const addPartner = newPartner => ({
  type: UPDATE_PARTNER,
  payload: newPartner,
})



// async action creator
export const logInUser = (username, password) => async dispatch => {
  dispatch({type: LOG_IN_SENT})
  try {
    const token = await login(username, password)
    dispatch({type: LOG_IN_FULFILLED, payload: token})
  } catch (err) {
    dispatch({type: LOG_IN_REJECTED, payload: err.message})
  }
}


