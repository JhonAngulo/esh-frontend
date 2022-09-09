import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { Grid, IconButton, Paper } from '@mui/material'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'

const SwitchDevice = ({ device, variables, sendEvent }: any): JSX.Element => {
  const [state, setState] = useState(
    variables.filter((item: any) => item.name === 'switch')[0].value
  )

  useEffect(() => {
    setState(variables.filter((item: any) => item.name === 'switch')[0].value)
  }, [variables])

  const handleChangeState: () => void = () => {
    // setState((prevState) => !prevState)
    sendEvent({
      id: variables.filter((item: any) => item.name === 'switch')[0].id,
      eventType: 'item_updated',
      value: !(state as boolean)
    })
  }

  return (
    <Grid item>
      <Paper elevation={8} sx={{ borderRadius: 8 }}>
        <Card sx={{ display: 'flex', width: 320, height: 114 }}>
          <Box
            sx={{
              height: 'auto',
              width: 100,
              backgroundColor: '#5b7ff74d',
              textAlign: 'center',
              display: 'grid',
              alignContent: 'center',
              justifyContent: 'center'
            }}
          >
            <IconButton aria-label="icon_device">
              <LightbulbIcon
                sx={{ height: 38, width: 38 }}
                htmlColor={'#3a3a39'}
                color={`${(state as boolean) ? 'primary' : 'inherit'}`}
              />
            </IconButton>
          </Box>
          <Box sx={{ width: 220, display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', padding: '10px', pb: 0 }}>
              <Typography component="div" variant="h5" noWrap>
                {device.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                <ElectricalServicesIcon
                  sx={{ height: 24, width: 24 }}
                  color="inherit"
                />
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
                pr: '10px',
                pb: '4px'
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state}
                      onChange={handleChangeState}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  }
                  label={(state as boolean) ? 'Encendido' : 'Apagado'}
                />
              </FormGroup>
            </Box>
          </Box>
        </Card>
      </Paper>
    </Grid>
  )
}

export default SwitchDevice
