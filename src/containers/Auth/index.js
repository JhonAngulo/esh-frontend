import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import MainLayout from '@/layout/MainLayout';
import LoginLayout from '@/layout/LoginLayout';
import { useRouter } from 'next/router'

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';
const authManager = (props) => {
    const user = useSelector(state => state.user)
    const [showAlert, setShowAlert] = useState(false)
    const router = useRouter()

    useEffect(() => {
      if (!user.isAuth && router.pathname !== '/login' && router.pathname !== '/_error') {
        router.push('/login')
      }

      if (user.isAuth && router.pathname === '/login') {
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false)
        }, 4000)
        router.push('/')
      }
    }, [user.isAuth])

    return (
    <>

    <Stack sx={{ width: '50%', transform: 'translate(50%, 10%)', position: 'absolute', bottom:'70px' }} spacing={2}>
      {/* <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        Credenciales invalidas — <strong>intenta de nuevo!</strong>
      </Alert> */}
      {/* <Alert variant="filled"  severity="warning">
        <AlertTitle>Advertencia</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert variant="filled"  severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert> */}

      <Fade in={showAlert}>
        <Alert variant="filled"  severity="info" elevation={8}>
          <AlertTitle>Éxito</AlertTitle>
          Usuario logueado — <strong>¡Bienvenido!</strong>
        </Alert>
      </Fade>
   

    </Stack>

      {
      user.isAuth
      ? (          
        <MainLayout>
          {props.children}
        </MainLayout>
      )
      : <LoginLayout>
          {props.children}
        </LoginLayout>
    }
    </>
  )
}

export default authManager