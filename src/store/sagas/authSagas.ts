import { getUserInfo, setAuthUser, clearAuthUser } from '../actions/auth'
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest
} from 'redux-saga/effects'
import axios from 'axios'
import { LOGIN } from '../types'
import Api from '@store/api'
import { Action, AnyAction } from 'redux'

function* getUserLogin({
  payload
}: any): Generator<CallEffect<unknown> | PutEffect<Action<string>>, void, any> {
  try {
    const auth = yield call(Api.userSingIn, { ...payload })
    if (auth.statusCode === 200) {
      localStorage.setItem('token', auth.results.token)
      localStorage.setItem('refreshToken', auth.results.refreshToken)
      axios.defaults.headers.common.Authorization = `Bearer ${
        auth.results.token as string
      }`
      yield put(getUserInfo())
    }
  } catch (e) {
    console.log(e)
    // yield put({ type: 'ERROR', message: e.message })
  }
}

function* getAuthByTokens({
  payload
}: any): Generator<CallEffect<unknown> | PutEffect<Action<string>>, void, any> {
  try {
    axios.defaults.headers.common.Authorization = `Bearer ${
      payload.token as string
    }`
    const auth = yield call(Api.refreshTokens, { ...payload })

    if (auth.results.token as boolean) {
      localStorage.setItem('token', auth.results.token)
      localStorage.setItem('refreshToken', auth.results.refreshToken)
      axios.defaults.headers.common.Authorization = `Bearer ${
        auth.results.token as string
      }`
      yield put(getUserInfo())
    }
  } catch (e) {
    console.log(e)
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    axios.defaults.headers.common.Authorization = ''
    yield put(clearAuthUser())
  }
}

function* getRefreshTokens(): Generator<
  CallEffect<unknown> | PutEffect<Action<string>>,
  void,
  any
> {
  try {
    const token = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refreshToken')
    if (token !== null && refreshToken !== null) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      const auth = yield call(Api.refreshTokens, { refreshToken })

      if (auth.results.token as boolean) {
        localStorage.setItem('token', auth.results.token)
        localStorage.setItem('refreshToken', auth.results.refreshToken)
        axios.defaults.headers.common.Authorization = `Bearer ${
          auth.results.token as string
        }`
        yield put(getUserInfo())
      }
    }
  } catch (e) {
    console.log(e)
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    axios.defaults.headers.common.Authorization = ''
    yield put(clearAuthUser())
  }
}

function* userLogoutClearTokens(): Generator<
  CallEffect<unknown> | PutEffect<Action<string>>,
  void,
  unknown
> {
  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')
  axios.defaults.headers.common.Authorization = ''
  yield put(clearAuthUser())
}

function* getUserInfoByToken(): Generator<
  CallEffect<unknown> | PutEffect<AnyAction>,
  void,
  any
> {
  try {
    const userInfo = yield call(Api.userInfo)
    if (userInfo as boolean) {
      yield put(setAuthUser(userInfo.results))
    }
  } catch (e) {
    console.log(e)
    // yield put({ type: 'ERROR', message: e.message })
  }
}

function* authSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(LOGIN.AUTH_GET, getUserLogin)
  yield takeLatest(LOGIN.AUTH_GET_BY_TOKEN, getAuthByTokens)
  yield takeLatest(LOGIN.AUTH_REFRESH_TOKEN, getRefreshTokens)
  yield takeLatest(LOGIN.AUTH_LOGOUT, userLogoutClearTokens)
  yield takeLatest(LOGIN.USER_INFO_GET, getUserInfoByToken)
}

export default authSaga
