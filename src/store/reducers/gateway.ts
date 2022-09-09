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
  const idUpdate = event.idDispositivo.toString().split('-')[1]
  const statusUpdate = event.estado
  const typeUpdate = event.tipoEstado

  const newItems = data[1].items.map((item: any) => {
    const newItem = item
    if (newItem.id === idUpdate) {
      newItem.value =
        typeUpdate === 'bool' ? Boolean(statusUpdate) : statusUpdate
    }
    return newItem
  })

  return [
    ...data,
    {
      ...data[1],
      items: newItems
    }
  ]
}

const gatewayReducer: Reducer<InitialStateProps, AnyAction> = (
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

export default gatewayReducer
