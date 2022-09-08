import { all, AllEffect, ForkEffect } from 'redux-saga/effects'
import authSaga from './authSagas'
import gatewaySaga from './gatewaySagas'

export default function* rootSaga(): Generator<
  AllEffect<
    | Generator<ForkEffect<never>, void, unknown>
    | AsyncGenerator<ForkEffect<never>, void, unknown>
  >,
  void,
  unknown
> {
  yield all([authSaga(), gatewaySaga()])
}
