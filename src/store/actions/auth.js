import { LOGIN } from '../types'

export const userSingin = ({ username, password }) => ({
  type: LOGIN.AUTH_GET,
  payload: { username, password }
})

export const getUserInfo = () => ({
  type: LOGIN.USER_INFO_GET
})

export const setAuthUser = (payload) => ({
  type: LOGIN.USER_SET,
  payload
})

