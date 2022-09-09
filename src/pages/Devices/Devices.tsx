import mqtt from 'mqtt' // import everything inside the mqtt module and give it the namespace "mqtt"ate a client
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'
import {
  getGateway,
  updateItemStatus,
  clearGateway
} from '@store/actions/gateway'
import DevicesContainer from '@containers/DevicesContainer'

const Devices = (): JSX.Element => {
  const gateway = useSelector((state: any) => state.gateway)
  const dispatch = useDispatch()
  const [msg, setMsg] = useState('{"none": "null"}')
  const mount = useRef(false)

  const client = useRef<any>(null)

  useEffect(() => {
    return () => {
      if (mount.current && gateway.status === 'loading') {
        if (!(gateway.data[1] as boolean)) {
          console.log('clean gateway')
          dispatch(clearGateway())
        }
      }
      mount.current = true
    }
  }, [])

  useEffect(() => {
    if (gateway.status === 'idle') {
      dispatch(getGateway())
    }
  }, [gateway])

  useEffect(() => {
    client.current = mqtt.connect('ws://52.23.226.104:8888', {
      protocol: 'ws',
      port: 8888,
      connectTimeout: 60000
    })
    client.current.subscribe('gateway/event')
    client.current.on('message', (topic: any, message: any) => {
      const newMsg = message.toString()
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

  if (gateway.status !== 'succeeded') {
    return <p>loading...</p>
  }

  const handleSendEvent: any = ({ eventType, id, value }: any) => {
    client.current.publish(
      `cloud/event/${gateway.data[1].serial as string}`,
      JSON.stringify({ id, eventType, value: value.toString() })
    )
  }

  return (
    <>
      <Typography variant="h4" component="h1" color="primary">
        Controlador {gateway.data[1].serial} - Dispositivos
      </Typography>
      <DevicesContainer
        devices={gateway.data[1].dispositivos}
        items={gateway.data[1].items}
        sendEvent={handleSendEvent}
      />
      <br></br>
      <Box>{msg}</Box>
    </>
  )
}

export default Devices
