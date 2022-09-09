/* eslint-disable array-callback-return */
import { Grid } from '@mui/material'
import SwitchDevice from '@components/DevicesComponents/SwitchDevice'
import DoorSensorDevice from '@components/DevicesComponents/DoorSensorDevice'
// import Motion_SensorDevice from '../../components/Devices/Motion_SensorDevice'
import TemperatureSensorDevice from '@components/DevicesComponents/TemperatureSensorDevice'
import GenericDevice from '@components/DevicesComponents/GenericDevice'

const DevicesContainer = ({ devices, items, sendEvent }: any): JSX.Element => {
  const validCategories = ['switch', 'security_sensor', 'temperature']

  const handleRenderDevice = (device: any): JSX.Element | undefined => {
    const variables = items.filter((item: any) => item.deviceId === device.id)

    switch (device.category) {
      case 'switch':
        return (
          <SwitchDevice
            key={device.id}
            device={device}
            variables={variables}
            sendEvent={sendEvent}
          />
        )

      case 'temperature':
        return (
          <TemperatureSensorDevice
            key={device.id}
            device={device}
            variables={variables}
            sendEvent={sendEvent}
          />
        )

      case 'security_sensor':
        // if (device.subcategory === 'motion') {
        //   return (
        //     <Motion_SensorDevice
        //       key={device.id}
        //       device={device}
        //       variables={variables}
        //       sendEvent={sendEvent}
        //     />
        //   )
        // }
        if (device.subcategory === 'door') {
          return (
            <DoorSensorDevice
              key={device.id}
              device={device}
              variables={variables}
              sendEvent={sendEvent}
            />
          )
        }
    }
  }

  return (
    <Grid container spacing={4}>
      {devices.map((device: any) => {
        if (validCategories.includes(device.category)) {
          return handleRenderDevice(device)
        }
      })}
      {devices.map((device: any) => {
        if (!validCategories.includes(device.category)) {
          return <GenericDevice key={device.id} device={device} />
        }
      })}
    </Grid>
  )
}

export default DevicesContainer
