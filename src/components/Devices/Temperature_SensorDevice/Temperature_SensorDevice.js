import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, IconButton, Paper } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';

const Temperature_SensorDevice = ({ device, variables, sendEvent}) => {

  const [temp, setTemp] = useState(variables.filter((item) => item.name === 'temp')[0].value)

 
  useEffect(() => {
    // setArmed(device.armed)
    setTemp(variables.filter((item) => item.name === 'temp')[0].value)
    // setBattery(variables.filter((item) => item.name === 'battery')[0].value)
  }, [variables])

  const handleChangeState = () => {
    // setState((prevState) => !prevState)
    // sendEvent({
    //   id: variables.filter((item) => item.name === 'motion')[0].id, 
    //   eventType: 'item_updated', 
    //   value: !state
    // })
  }

  const handleTempIcon = () => {
    if (temp.value >= 28) {
      return <WbSunnyIcon sx={{ height: 38, width: 38 }} color='warning' />
    } else if (temp.value  >= 25) {
      return <AirIcon sx={{ height: 38, width: 38 }} htmlColor='#1a740a' />
    } else {
      return <AcUnitIcon sx={{ height: 38, width: 38 }} color='primary' />
    }
  }

  return (
    <Grid item >
      <Paper elevation={8} sx={{ borderRadius: 8 }}  >
      <Card sx={{ display: 'flex', width: 320, height: 114 }} >

        <Box sx={{ height: 'auto', width: 100, backgroundColor: '#5b7ff74d', textAlign: 'center', display: 'grid', alignContent: 'center', justifyContent: 'center' }}>
          <IconButton aria-label="icon_device">
            {handleTempIcon()}
          </IconButton>
        </Box>
        <Box sx={{ width: 220, display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto', padding: '12px' }}>
            <Typography component="div" variant="h5" noWrap>
              {device.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              {temp.value}° {temp.scale}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      </Paper>
    </Grid>
  );
}


export default Temperature_SensorDevice