import mqtt from 'mqtt' // import everything inside the mqtt module and give it the namespace "mqtt"ate a client
import JSONPretty from 'react-json-pretty'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material'
import {
  getGateways,
  updateItemStatus,
  clearGateways
} from '@store/actions/gateway'
import DevicesContainer from '@containers/DevicesContainer'

const Devices = (): JSX.Element => {
  const gateways = useSelector((state: any) => state.gateways)
  const dispatch = useDispatch()
  const [gatewaySelected, setgatewaySelected] = useState(() => {
    const sel = localStorage.getItem('gatewaySelected')
    return sel === null ? '' : sel
  })
  const [msg, setMsg] = useState('{"none": "null"}')
  const mount = useRef(false)

  const client = useRef<any>(null)

  useEffect(() => {
    return () => {
      if (mount.current && gateways.status === 'loading') {
        if (!(gateways.data[0] as boolean)) {
          console.log('clean gateways')
          dispatch(clearGateways())
        }
      }
      mount.current = true
    }
  }, [])

  useEffect(() => {
    if (gateways.status === 'idle') {
      dispatch(getGateways())
    }
  }, [gateways])

  useEffect(() => {
    client.current = mqtt.connect('ws://52.23.226.104:8888', {
      protocol: 'ws',
      port: 8888,
      connectTimeout: 60000
    })
    client.current.subscribe('gateway/event')
    client.current.on('message', (topic: any, message: any) => {
      const newMsg = message.toString()
      console.log('new message')
      setMsg(newMsg)
      dispatch(updateItemStatus(JSON.parse(newMsg)))
    })
    return () => {
      if (client.current as boolean) {
        client.current.unsubscribe('gateway/event')
        client.current.end(client.current)
      }
    }
  }, [])

  if (gateways.status !== 'succeeded') {
    return <p>loading...</p>
  }

  const handleSendEvent: any = ({ eventType, id, value }: any) => {
    client.current.publish(
      `cloud/event/${gatewaySelected}`,
      JSON.stringify({ id, eventType, value: value.toString() })
    )
  }

  const handleChange: (event: SelectChangeEvent) => void = (
    event: SelectChangeEvent
  ) => {
    localStorage.setItem('gatewaySelected', event.target.value)
    setgatewaySelected(event.target.value)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 10
        }}
      >
        <Typography variant="h4" component="h1" color="primary">
          Dispositivos
        </Typography>
        <Box sx={{ width: 300 }}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              placeholder="Seleccione un controlador"
            >
              Contralador
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gatewaySelected}
              label="Contralador"
              placeholder="Seleccione un controlador"
              onChange={handleChange}
            >
              {gateways.data.map((gateway: any) => {
                return (
                  <MenuItem value={gateway.serial} key={gateway.serial}>
                    {gateway.serial}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      {gatewaySelected.length > 0 ? (
        <>
          <DevicesContainer
            devices={
              gateways.data.filter(
                (gateway: any) => gateway.serial === gatewaySelected
              )[0].devices
            }
            items={
              gateways.data.filter(
                (gateway: any) => gateway.serial === gatewaySelected
              )[0].items
            }
            sendEvent={handleSendEvent}
          />
          <br></br>
          <JSONPretty id="json-pretty" data={msg}></JSONPretty>
        </>
      ) : (
        <Typography variant="body1" component="p" color="secundary">
          No ha seleccionado un controlador.
        </Typography>
      )}
    </>
  )
}

export default Devices
