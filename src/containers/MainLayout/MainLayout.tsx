import { Outlet } from 'react-router-dom'

const MainLayout = (): JSX.Element => {
  return (
    <>
      <div>MainLayout</div>
      <Outlet />
    </>
  )
}

export default MainLayout
