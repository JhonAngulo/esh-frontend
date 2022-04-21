import { all } from 'redux-saga/effects'
import authSaga from './authSagas'
import gatewaySaga from './gatewaySagas'

export default function * rootSaga () {
  yield all([
    authSaga(),
    gatewaySaga()
  ])
}
