import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux'
import { getGateway } from '../src/store/actions/gateway'
import DevicesContainer from '../src/containers/devices'
import * as mqtt from "mqtt"  // import everything inside the mqtt module and give it the namespace "mqtt"ate a client

// var client  = mqtt.connect('mqtt://54.196.130.6:8888', {
//   protocol: 'ws',
//   port: 8888
// });

// client.subscribe('cloud/event/90002552');


export default function dispositivos() {

  const gateway = useSelector(state => state.gateway)
  const dispatch = useDispatch()
  const [msg, setMsg] = useState('{"none": "null"}');

  useEffect(() => {
    if(gateway.status === 'idle') {
      dispatch(getGateway())
    }
  }, [gateway])

  useEffect(() => {
    
    const client = mqtt.connect('ws://54.196.130.6:8888', {
      protocol: 'ws',
      port: 8888,
      connectTimeout: 60000
    });

    client.subscribe('gateway/event');

    client.on('message', (topic, message) => { 
      const newMsg = message.toString()
      console.log(topic, newMsg)
      setMsg(newMsg);
    });
  
    return () => {
      if (client) {
        client.unsubscribe('gateway/event');
        client.end(client);
      }
    };
  }, [])

  if (gateway.status !== 'succeeded') {
    return <p>loading...</p>
  }

  console.log(gateway.data[0].serial)
  return (
    <>
      <Typography variant="h4" component="h1" color='primary'>
        Controlador {gateway.data[0].serial} - Dispositivos
      </Typography>
      <DevicesContainer devices={gateway.data[0].dispositivos} items={gateway.data[0].items}/>
      <div>
        {msg}
      </div>
    </>
  );
}
