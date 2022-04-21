import { GATEWAY } from '../types'

export const getGateway = () => ({
  type: GATEWAY.GATEWAY_DATA_GET
})

export const setGateway = (payload) => ({
  type: GATEWAY.GATEWAY_DATA_SET,
  payload
})

export const updateItemStatus = (payload) => ({
  type: GATEWAY.GATEWAY_DATA_UPDATE_ITEM,
  payload
})

