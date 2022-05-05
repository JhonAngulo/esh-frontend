import { LOGIN } from '../types'

export const userSingin = ({ username, password }) => ({
  type: LOGIN.AUTH_GET,
  payload: { username, password }
})

export const updateTokens = () => ({
  type: LOGIN.AUTH_REFRESH_TOKEN,
})

export const userLogout = () => ({
  type: LOGIN.AUTH_LOGOUT
})

export const getUserInfo = () => ({
  type: LOGIN.USER_INFO_GET
})

export const setAuthUser = (payload) => ({
  type: LOGIN.USER_SET,
  payload
})

export const clearAuthUser = () => ({
  type: LOGIN.USER_CLEAR
})

