import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest
} from 'redux-saga/effects'
import { setGateway } from '../actions/gateway'
import { GATEWAY } from '../types'
import Api from '../api'

function* getGatewayData(): Generator<
  CallEffect<unknown> | PutEffect<any>,
  void,
  any
> {
  try {
    const gateway = yield call(Api.getGateway)
    if (gateway.results as boolean) {
      yield put(setGateway(gateway.results))
    }
  } catch (e) {
    console.log(e)
    // yield put({ type: 'ERROR', message: e.message })
  }
}

async function* gatewaySaga(): AsyncGenerator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(GATEWAY.GATEWAY_DATA_GET, getGatewayData)
}

export default gatewaySaga
