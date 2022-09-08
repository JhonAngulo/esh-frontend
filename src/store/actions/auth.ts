import { Action, AnyAction } from 'redux'
import { LOGIN } from '../types'

export const userLogin = ({ username, password }: any): any => ({
  type: LOGIN.AUTH_GET,
  payload: { username, password }
})

export const tokenLogin = ({ token, refreshToken }: any): any => ({
  type: LOGIN.AUTH_GET_BY_TOKEN,
  payload: { token, refreshToken }
})

export const updateTokens = (): Action<string> => ({
  type: LOGIN.AUTH_REFRESH_TOKEN
})

export const userLogout = (): Action<string> => ({
  type: LOGIN.AUTH_LOGOUT
})

export const getUserInfo = (): Action<string> => ({
  type: LOGIN.USER_INFO_GET
})

export const setAuthUser = (payload: any): AnyAction => ({
  type: LOGIN.USER_SET,
  payload
})

export const clearAuthUser = (): Action<string> => ({
  type: LOGIN.USER_CLEAR
})
