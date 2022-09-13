import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user'
import gatewaysReducer from './reducers/gateways'
import reduxSaga from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = reduxSaga()

const store = configureStore({
  reducer: {
    user: userReducer,
    gateways: gatewaysReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
