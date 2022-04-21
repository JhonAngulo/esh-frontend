import { GATEWAY } from '../types'

const initialState = {
  data: {},
  status: 'idle',
  error: null
}

const handleItemUpdate = ({ data, event }) => {
  const idUpdate = event.idDispositivo.toString().split('-')[1]
  const statusUpdate = event.estado
  const typeUpdate = event.tipoEstado

  const newItems =  data[0].items.map((item) => {
    let newItem = item
    if (newItem.id === idUpdate) {
      newItem.value = typeUpdate === 'bool' ? Boolean(statusUpdate) : statusUpdate
    }
    return newItem
  })
  return [{
    ...data[0],
    items: newItems
  }]
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
    case GATEWAY.GATEWAY_DATA_UPDATE_ITEM:
        return {
          ...state,
          data: handleItemUpdate({ data: state.data, event: action.payload }),
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
