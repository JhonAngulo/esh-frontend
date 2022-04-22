import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import MainLayout from '../../../src/layout/MainLayout';
import LoginLayout from '../../../src/layout/LoginLayout';
import { useRouter } from 'next/router'

const authManager = (props) => {
    const user = useSelector(state => state.user)

    const router = useRouter()

    useEffect(() => {
      if (!user.isAuth && router.pathname !== '/login' && router.pathname !== '/_error') {
        router.push('/login')
      }

      if (user.isAuth && router.pathname === '/login') {
        router.push('/')
      }
    }, [user.isAuth])

    return (
    <>
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