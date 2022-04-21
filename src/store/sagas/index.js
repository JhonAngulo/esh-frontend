import { all } from 'redux-saga/effects'
import authSaga from './authSagas'
import devicesSaga from './devicesSagas'

export default function * rootSaga () {
  yield all([
    authSaga(),
    devicesSaga()
  ])
}
