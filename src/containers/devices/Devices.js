import { Grid } from '@mui/material'
import SwitchDevice from '../../components/Devices/SwitchDevice'
import Door_SensorDevice from '../../components/Devices/Door_SensorDevice'
import Motion_SensorDevice from '../../components/Devices/Motion_SensorDevice'
import Temperature_SensorDevice from '../../components/Devices/Temperature_SensorDevice'
import GenericDevice from '../../components/Devices/GenericDevice'

const Devices = ({ devices, items, sendEvent }) => {

    const validCategories = ['switch', 'security_sensor', 'temperature']

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
                return
        }
    }

  return (
    <Grid container spacing={4} >
        {
            devices.map((device) => {
                if (validCategories.includes(device.category)) {
                    return handleRenderDevice(device)
                }
            })
        }
        {
            devices.map((device) => {
                if (!validCategories.includes(device.category)) {
                    return <GenericDevice key={device.id} device={device} />
                }
            })
        }
    </Grid>
  )
}

export default Devices