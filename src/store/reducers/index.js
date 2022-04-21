import { combineReducers } from 'redux'
import userReducer from './user'
import gatewayReducer from './gateway'

export default combineReducers({
  user: userReducer,
  gateway: gatewayReducer
})
