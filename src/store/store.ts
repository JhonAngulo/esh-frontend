import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user'
import gatewayReducer from './reducers/gateway'
import reduxSaga from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = reduxSaga()

const store = configureStore({
  reducer: {
    user: userReducer,
    gateway: gatewayReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
