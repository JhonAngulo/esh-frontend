import { AccountBox, Logout } from '@mui/icons-material';
import { Avatar, Box, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'

const UserInfo = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box component='div' sx={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={handleClick} >
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" >
            J
        </Avatar>
        <Typography variant="body1" component="p" color='textSecondary' fontWeight={500}>
            Jhon Manuel
        </Typography>
    </Box>
    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountBox fontSize="medium" color='primary' />
          </ListItemIcon>
          Cuenta
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="medium" color='primary' />
          </ListItemIcon>
          Salir
        </MenuItem>
      </Menu>
          </>
  )
}

export default UserInfo

