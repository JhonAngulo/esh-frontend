import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SwitchDevice from '../../components/Devices/SwitchDevice'
import Door_SensorDevice from '../../components/Devices/Door_SensorDevice'
import Motion_SensorDevice from '../../components/Devices/Motion_SensorDevice'
import Temperature_SensorDevice from '../../components/Devices/Temperature_SensorDevice'

const Devices = ({ devices, items, sendEvent }) => {

    const handleRenderDevice = (device) => {
 
        const variables = items.filter((item) => item.device_id === device.id)
        
        switch (device.category) {
            case 'switch':
                return <SwitchDevice key={device.id} device={device} variables={variables} sendEvent={sendEvent} />

            case 'security_sensor':
                if (device.subcategory === 'motion') {
                    return <Motion_SensorDevice key={device.id} device={device} variables={variables} sendEvent={sendEvent} />
                }
                if (device.subcategory === 'door') {
                    return <Door_SensorDevice key={device.id} device={device} variables={variables} sendEvent={sendEvent} />
                }

            case 'temperature':
                return <Temperature_SensorDevice key={device.id} device={device} variables={variables} sendEvent={sendEvent} />
        
            default:
                return (
                    <Box key={device.id} sx={{ pr:2, pl: 2, pb: 2, pt: 2 }}>
                        <p>No render device {device.category}</p>
                    </Box>
                )
        }
    }

  return (
    <Grid container spacing={4} >
        {
            devices.map((device) => {
                return handleRenderDevice(device)
            })
        }
    </Grid>
  )
}

export default Devices