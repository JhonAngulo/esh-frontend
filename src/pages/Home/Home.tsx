import { useState, MouseEventHandler } from 'react'
import reactLogo from '@assets/react.svg'
import { Button, Link, Typography } from '@mui/material'
import Breadcrumbs from '@components/Breadcrumbs'
import { Box } from '@mui/system'

const index = (): JSX.Element => {
  const [count, setCount] = useState(0)

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <Breadcrumbs route="Home Page" />
      <Box
        sx={{
          height: 'calc(100vh - 24px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Link
            underline="hover"
            color="inherit"
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="https://reactjs.org"
            target="_blank"
            rel="noreferrer"
          >
            <img src={reactLogo} className="logo react" alt="React logo" />
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="https://mui.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/material_ui.svg"
              className="logo"
              alt="Vite Materil UI"
            />
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/typescript.svg" className="logo" alt="TypeScrip" />
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="https://eslint.org"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/eslint.svg" height={30} className="logo" alt="ESLint" />
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="https://prettier.io"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/prettier.png"
              height={30}
              className="logo"
              alt="ESLint"
            />
          </Link>
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: '42px',
            textAlign: 'center'
          }}
        >
          Vite + React + Material UI + TypeScript + Eslint + Prettier{' '}
        </Typography>
        <Box
          mt={4}
          mb={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: 4
          }}
        >
          <Button variant="contained" onClick={handleClick}>
            count is {count}
          </Button>
          <Typography variant="body1">
            Edit <code>src/pages/Home.tsx</code> and save to test HMR
          </Typography>
        </Box>
        <Typography variant="caption">
          Click on the Vite, React, TypeScript, Material UI, Eslint and Prettier
          logos to learn more
        </Typography>
      </Box>
    </>
  )
}

export default index
