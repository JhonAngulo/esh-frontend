import { Action, AnyAction } from 'redux'
import { GATEWAY } from '../types'

export const getGateway = (): Action<string> => ({
  type: GATEWAY.GATEWAY_DATA_GET
})

export const setGateway = (payload: any): AnyAction => ({
  type: GATEWAY.GATEWAY_DATA_SET,
  payload
})

export const updateItemStatus = (payload: any): AnyAction => ({
  type: GATEWAY.GATEWAY_DATA_UPDATE_ITEM,
  payload
})

export const clearGateway = (): Action<string> => ({
  type: GATEWAY.GATEWAY_DATA_CLEAR
})
