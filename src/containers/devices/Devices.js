import { Grid } from '@mui/material'
import React from 'react'
import SwitchDevice from '../../components/Devices/Switch/SwitchDevice'

const Devices = ({ devices, items }) => {
    console.log(devices)
    console.log('items', items)

    const handleRenderDevice = (device) => {
        console.log('intro')
        const variables = items.filter((item) => item.device_id === device.id)
        
        switch (device.category) {
            case 'switch':
                return <SwitchDevice key={device.id} device={device} variables={variables} />
        
            default:
                return <p key={device.id}>No render device {device.category}</p>
        }
    }

  return (
    <>
        <div>Devices</div>
        <Grid container spacing={2}>
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