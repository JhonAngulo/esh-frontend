import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Grid, IconButton, Paper } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const SwitchDevice = ({ device, variables}) => {

  const [state, setState] = useState(variables.filter((item) => item.name === 'switch')[0].value)
 
  useEffect(() => {
    setState(variables.filter((item) => item.name === 'switch')[0].value)
  }, [variables])

  const handleChangeState = () => {
    setState((prevState) => !prevState)
  }

  return (
    <Grid item >
      <Paper elevation={8} sx={{ borderRadius: 8 }}  >
      <Card sx={{ display: 'flex', minWidth: 330 }} >

        <Box sx={{ height: 'auto', width: 100, backgroundColor: '#87a8ed', textAlign: 'center', display: 'grid', alignContent: 'center', justifyContent: 'center' }}>
          <IconButton aria-label="play/pause">
            <LightbulbIcon sx={{ height: 38, width: 38 }} htmlColor={'#3a3a39'} color={`${state && 'primary'}`}/>
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {device.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              {device.id}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: '130px', pb: 1 }}>
              <FormGroup>
                  <FormControlLabel control={<Switch checked={state} onChange={handleChangeState} inputProps={{ 'aria-label': 'controlled' }}/>} label={state ? 'On': 'Off'} />
              </FormGroup>
          </Box>
        </Box>
        
      </Card>
      </Paper>
    </Grid>
  );
}


export default SwitchDevice