import { getUserInfo, setAuthUser } from '../actions/auth'
import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { LOGIN } from '../types'
import Api from '../api'

function * getTokensSingIn ({ payload }) {
  try {
    const auth = yield call(Api.userSingIn, { ...payload })
    
    if (auth.token) {
      localStorage.setItem('token', auth.token)
      localStorage.setItem('refreshToken', auth.refreshToken)
      axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`
      yield put(getUserInfo())

    }
  } catch (e) {
    console.log(e)
    // yield put({ type: 'ERROR', message: e.message })
  }
}

function * getUserInfoByToken () {
  try {
    const userInfo = yield call(Api.userInfo)
    
    if (userInfo) {
      console.log('userInfo', userInfo)
      yield put(setAuthUser(userInfo.data))

    }
  } catch (e) {
    console.log(e)
    // yield put({ type: 'ERROR', message: e.message })
  }
}

function * authSaga () {
  yield takeLatest(LOGIN.AUTH_GET, getTokensSingIn)
  yield takeLatest(LOGIN.USER_INFO_GET, getUserInfoByToken)
}

export default authSaga
