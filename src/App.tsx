import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import store from '@store/store'
import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
}

export default App
