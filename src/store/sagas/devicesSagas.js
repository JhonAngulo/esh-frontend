import { call, put, takeLatest } from 'redux-saga/effects'
import { setGateway } from '../actions/gateway'
import { GATEWAY } from '../types'
import Api from '../api'

function * getGatewayData () {
  try {
    const gateway = yield call(Api.getGateway)
    console.log('gateway', gateway)
    if (gateway.data) {
      yield put(setGateway(gateway.data))
    }
  } catch (e) {
    console.log(e)
    // yield put({ type: 'ERROR', message: e.message })
  }
}

function * gatewaySaga () {
  yield takeLatest(GATEWAY.GATEWAY_DATA_GET, getGatewayData)
}

export default gatewaySaga
