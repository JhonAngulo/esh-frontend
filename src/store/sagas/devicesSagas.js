import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { LOGIN } from '../types'
import Api from '../api'

function * getSingIn ({ payload }) {
  try {
    const auth = yield call(Api.userSingIn, { ...payload })
    console.log('userSaga', auth.token)
    if (auth.token) {
      localStorage.setItem('token', auth.token)
      localStorage.setItem('refreshToken', auth.refreshToken)
      yield put({ type: LOGIN.USER_SET, payload: auth })
    }
  } catch (e) {
    console.log(e)
    // yield put({ type: 'ERROR', message: e.message })
  }
}

function * authSaga () {
  yield takeLatest(LOGIN.USER_GET, getSingIn)
}

export default authSaga
