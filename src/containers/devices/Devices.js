import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SwitchDevice from '../../components/Devices/Switch/SwitchDevice'

const Devices = ({ devices, items }) => {

    const handleRenderDevice = (device) => {
 
        const variables = items.filter((item) => item.device_id === device.id)
        
        switch (device.category) {
            case 'switch':
                return <SwitchDevice key={device.id} device={device} variables={variables} />
        
            default:
                return (
                    <Box key={device.id} sx={{ pr:2, pl: 2, pb: 2, pt: 2 }}>
                        <p>No render device {device.category}</p>
                    </Box>
                )
        }
    }

  return (
    <>
        <div>Devices</div>
        <Grid container spacing={4} >
            {
                devices.map((device) => {
                    return handleRenderDevice(device)
                })
            }
        </Grid>
    </>
  )
}

export default Devices