import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, IconButton, Paper } from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const GenericDevice = ({ device }) => {
 
  return (
    <Grid item >
      <Paper elevation={8} sx={{ borderRadius: 8 }}  >
      <Card sx={{ display: 'flex', width: 320, height: 114 }} >

        <Box sx={{ height: 'auto', width: 100, backgroundColor: '#5b7ff74d', textAlign: 'center', display: 'grid', alignContent: 'center', justifyContent: 'center' }}>
          <IconButton aria-label="icon_device">
            <MeetingRoomIcon sx={{ height: 38, width: 38 }} htmlColor={'#3a3a39'} />
          </IconButton>
        </Box>
        <Box sx={{ width: 220, display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ width: '220px', flex: '1 0 auto', padding: '10px' }}>
            <Typography component="div" variant="h5" noWrap>
              {device.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              Dispositivo no implementado
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', pr: '10px', pb: '4px' }}>

          </Box>
        </Box>
        
      </Card>
      </Paper>
    </Grid>
  );
}


export default GenericDevice