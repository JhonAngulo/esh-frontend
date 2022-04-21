import { GATEWAY } from '../types'

const initialState = {
  data: {},
  status: 'idle',
  error: null
}

const gatewayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GATEWAY.GATEWAY_DATA_GET:
      return {
        ...state,
        status: 'loading'
      }
    case GATEWAY.GATEWAY_DATA_SET:
      return {
        ...state,
        data: action.payload,
        status: 'succeeded',
        error: null
      }
    case GATEWAY.GATEWAY_DATA_ERROR:
      return {
        ...state,
        data: {},
        status: 'failed',
        error: action.payload
      }
    case GATEWAY.GATEWAY_DATA_CLEAR:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default gatewayReducer
