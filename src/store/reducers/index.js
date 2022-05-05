import { combineReducers } from 'redux'
import userReducer from './user'
import gatewayReducer from './gateway'

const appReducer = combineReducers({
  user: userReducer,
  gateway: gatewayReducer
})

const initialState = appReducer({}, {})

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    return appReducer(initialState, action)
  }

  return appReducer(state, action)
}

export default rootReducer