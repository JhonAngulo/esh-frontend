import { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux'
import { getGateway, updateItemStatus } from '../src/store/actions/gateway'
import DevicesContainer from '../src/containers/devices'
import * as mqtt from "mqtt"  // import everything inside the mqtt module and give it the namespace "mqtt"ate a client
import { Box } from '@mui/material';

// var client  = mqtt.connect('mqtt://54.196.130.6:8888', {
//   protocol: 'ws',
//   port: 8888
// });

// client.subscribe('cloud/event/90002552');


export default function dispositivos() {

  const gateway = useSelector(state => state.gateway)
  const dispatch = useDispatch()
  const [msg, setMsg] = useState('{"none": "null"}');
  
  const client = useRef(null)
  
  useEffect(() => {
    if(gateway.status === 'idle') {
      dispatch(getGateway())
    }
  }, [gateway])

  useEffect(() => {
    
    client.current = mqtt.connect('ws://54.196.130.6:8888', {
      protocol: 'ws',
      port: 8888,
      connectTimeout: 60000
    });

    client.current.subscribe('gateway/event');

    client.current.on('message', (topic, message) => { 
      const newMsg = message.toString()
      setMsg(newMsg);
      dispatch(updateItemStatus(JSON.parse(newMsg)))
    });
  
    return () => {
      if (client.current) {
        client.current.unsubscribe('gateway/event');
        client.current.end(client.current);
      }
    };
  }, [])

  
  if (gateway.status !== 'succeeded') {
    return <p>loading...</p>
  }
  
  const handleSendEvent = ({ eventType, id, value }) => {
    console.log('send event')
    client.current.publish(`cloud/event/${gateway.data[0].serial}`, JSON.stringify({ id, eventType, value: value.toString() }))
  }
  return (
    <>
      <Typography variant="h4" component="h1" color='primary'>
        Controlador {gateway.data[0].serial} - Dispositivos
      </Typography>
      <DevicesContainer devices={gateway.data[0].dispositivos} items={gateway.data[0].items} sendEvent={handleSendEvent} />
      <br></br>
      <Box>
        {msg}
      </Box>
    </>
  );
}
