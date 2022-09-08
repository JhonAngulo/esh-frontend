import LoginLayout from '@containers/LoginLayout'
import MainLayout from '@containers/MainLayout/MainLayout'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { tokenLogin } from '@store/actions/auth'

const AppRouter = (): JSX.Element => {
  const user = useSelector((state: any) => state.user)
  const token = localStorage.getItem('token')
  const refreshToken = localStorage.getItem('refreshToken')
  const checkTokens = useRef(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (token !== null && refreshToken !== null && !checkTokens.current) {
      checkTokens.current = true
      dispatch(tokenLogin({ token, refreshToken }))
    }
  }, [])

  useEffect(() => {
    if (user.status !== 'loading' && !checkTokens.current) {
      if (!(user.isAuth as boolean)) {
        navigate('/login')
      }
    }

    if (user.status === 'succeeded' && (user.isAuth as boolean)) {
      navigate('/inicio')
    }
  }, [user])

  if (!['idle', 'succeeded'].includes(user.status)) {
    return <>loading...</>
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/inicio" element={<>Manuel</>} />
          <Route path="/dispositivos" element={<>Manuel</>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter
