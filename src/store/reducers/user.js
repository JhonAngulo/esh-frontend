import {LOGIN} from '../types'

const initialState = {
  authUser: {},
  isAuth: false,
  status: 'idle',
  error: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.AUTH_GET:
      return {
        ...state,
        status: 'loading'
      }
    case LOGIN.USER_INFO_GET:
      return {
        ...state,
        status: 'loading'
      }
    case LOGIN.USER_SET:
      return {
        ...state,
        authUser: action.payload,
        isAuth: true,
        status: 'succeeded',
        error: null
      }
    case LOGIN.USER_ERROR:
      return {
        ...state,
        authUser: {},
        isAuth: false,
        status: 'failed',
        error: action.payload
      }
    case LOGIN.USER_CLEAR:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default userReducer
