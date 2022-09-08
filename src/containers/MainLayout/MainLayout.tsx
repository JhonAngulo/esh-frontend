import { Outlet, Link } from 'react-router-dom'
import { MouseEventHandler, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import optionsList from './menuOptionsList'
import logo from '@assets/logo.webp'
import UserInfo from '@components/UserInfo'
import { useSelector } from 'react-redux'

const drawerWidth = 240

const MainLayout = ({ window }: any): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const user = useSelector((state: any) => state.user)

  const handleDrawerToggle: MouseEventHandler<HTMLButtonElement> = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar>
        <img
          width={220}
          src={logo}
          alt="Logo Easy Smart Home"
          style={{ padding: '5px' }}
        />
      </Toolbar>
      <Divider />
      <Toolbar />
      <List>
        {optionsList.map(({ id, displayName, urlLink, icon }: any) => (
          <Link to={urlLink} color="primary" key={id} className="menu">
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={displayName} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  if (user.status !== 'succeeded') {
    return <>loading...</>
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar
          sx={{
            display: 'flex-end',
            justifyContent: 'space-between',
            flexDirection: 'row-reverse'
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <UserInfo />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#f3f6f9',
          height: '100vh'
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
