import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Grid, IconButton, Paper } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

const Motion_SensorDevice = ({ device, variables, sendEvent}) => {

  const [tripped, setTripped] = useState(variables.filter((item) => item.name === 'motion')[0].value)
  const [battery, setBattery] = useState(variables.filter((item) => item.name === 'battery')[0].value)
  const [armed, setArmed] = useState(device.armed)
 
  useEffect(() => {
    setArmed(device.armed)
    setTripped(variables.filter((item) => item.name === 'motion')[0].value)
    setBattery(variables.filter((item) => item.name === 'battery')[0].value)
  }, [variables])

  const handleChangeState = () => {
    // setState((prevState) => !prevState)
    // sendEvent({
    //   id: variables.filter((item) => item.name === 'motion')[0].id, 
    //   eventType: 'item_updated', 
    //   value: !state
    // })
  }

  return (
    <Grid item >
      <Paper elevation={8} sx={{ borderRadius: 8 }}  >
      <Card sx={{ display: 'flex', width: 300, height: 114 }} >

        <Box sx={{ height: 'auto', width: 100, backgroundColor: `${tripped ? '#d77b7b': '#5b7ff74d'}`, textAlign: 'center', display: 'grid', alignContent: 'center', justifyContent: 'center' }}>
          <IconButton aria-label="icon_device">
            <DirectionsWalkIcon sx={{ height: 38, width: 38 }} htmlColor={`${tripped ? '#d12020' : '#3a3a39'}`} />
          </IconButton>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto', padding: '10px' }}>
            <Typography component="div" variant="h5">
              {device.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              {battery}%
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', pr: '10px', pb: '4px' }}>
              <FormGroup>
                  <FormControlLabel control={<Switch checked={armed} onChange={handleChangeState} inputProps={{ 'aria-label': 'controlled' }}/>} label={armed ? 'Armado': 'Desarmado'} />
              </FormGroup>
          </Box>
        </Box>
        
      </Card>
      </Paper>
    </Grid>
  );
}


export default Motion_SensorDevice