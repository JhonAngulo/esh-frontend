import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const UserInfo = () => {
  return (
    <Box component='div' sx={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} >
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" >
            J
        </Avatar>
        <Typography variant="body1" component="p" color='textSecondary' fontWeight={500}>
            Jhon Manuel
        </Typography>
    </Box>
  )
}

export default UserInfo

