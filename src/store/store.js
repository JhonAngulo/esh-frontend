import { createStore, applyMiddleware } from 'redux'
import reduxSaga from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'
import rootSaga from './sagas'

const initialState = {}
const sagaMiddleware = reduxSaga()

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
