import { AnyAction, Reducer } from 'redux'
import { GATEWAY } from '../types'

interface InitialStateProps {
  data: null | {}
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null | string
}

const initialState: InitialStateProps = {
  data: {},
  status: 'idle',
  error: null
}

const handleItemUpdate: any = ({ data, event }: any) => {
  const idUpdate = event.deviceId.toString().split('-')[1]
  const statusUpdate = event.value
  const typeUpdate = event.event

  const gatewaySelected = localStorage.getItem('gatewaySelected')

  if (gatewaySelected === null) {
    return data
  }

  const gatewayUpdate = data.filter(
    (gateway: any) => gateway.serial === gatewaySelected
  )[0]

  const updateItems = gatewayUpdate.items.map((item: any) => {
    const newItem = item
    if (newItem.id === idUpdate) {
      newItem.value =
        typeUpdate === 'bool' ? Boolean(statusUpdate) : statusUpdate
    }
    return newItem
  })

  return data.map((gateway: any) => {
    if (gateway.serial === gatewaySelected) {
      gateway.items = updateItems
    }
    return gateway
  })
}

const gatewaysReducer: Reducer<InitialStateProps, AnyAction> = (
  state = initialState,
  action: AnyAction
) => {
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

export default gatewaysReducer
