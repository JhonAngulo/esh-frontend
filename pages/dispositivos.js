import { useEffect, useState } from 'react';
// import mqtt from 'mqtt';
import * as mqtt from "mqtt"  // import everything inside the mqtt module and give it the namespace "mqtt"ate a client
import Typography from '@mui/material/Typography';


// var client  = mqtt.connect('mqtt://54.196.130.6:8888', {
//   protocol: 'ws',
//   port: 8888
// });

// client.subscribe('cloud/event/90002552');


export default function About() {

  const [msg, setMsg] = useState('{"none": "null"}');


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

  return (
    <>
      <Typography variant="h4" component="h1" color='primary'>
        Easy Smart Home - Dispositivos
      </Typography>
      <div>
        {msg}
      </div>
    </>
  );
}
