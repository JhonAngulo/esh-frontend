import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Paper,
  Typography
} from '@mui/material'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'

import { useEffect, useState } from 'react'
import CustomizedSwitch from '@components/CustomizedSwitch'

const SwitchDevice = ({ device, variables, sendEvent }: any): JSX.Element => {
  const [state, setState] = useState(
    variables.filter((item: any) => item.name === 'switch')[0].value === true
  )

  useEffect(() => {
    setState(
      variables.filter((item: any) => item.name === 'switch')[0].value === true
    )
  }, [variables])

  const handleChangeState: () => void = () => {
    // setState((prevState) => !prevState)
    sendEvent({
      id: variables.filter((item: any) => item.name === 'switch')[0].id,
      eventType: 'item_updated',
      value: !state
    })
  }

  return (
    <Grid item>
      <Paper
        elevation={8}
        sx={{
          borderRadius: '24px 48px 24px 48px',
          width: '180px',
          height: '200px',
          // backgroundColor: '#00C2A8, #3a3a39',  menu #34383c
          // backgroundColor: '#009EFA',
          display: 'grid',
          gridTemplate: '1fr 1fr / 1fr',
          gap: 0,
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            pr: 2
          }}
        >
          <IconButton aria-label="icon_device">
            <LightbulbIcon
              sx={{ height: 48, width: 48 }}
              // htmlColor="#a1abb3"
              color={`${state ? 'primary' : 'action'}`}
            />
          </IconButton>
          <ElectricalServicesIcon
            sx={{ height: 24, width: 24 }}
            color="inherit"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <Box
            sx={{
              width: '100%',
              textAlign: 'center',
              fontSize: '0.05rem',
              letterSpacing: 0.6
            }}
          >
            <Typography
              component="h6"
              variant="subtitle1"
              noWrap
              color="text.primary"
            >
              {device.name}
            </Typography>
          </Box>
          <Box
            sx={{
              pb: 2
            }}
          >
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={
                    <CustomizedSwitch
                      checked={state}
                      onChange={handleChangeState}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  }
                  label={
                    state ? (
                      <Typography
                        variant="subtitle2"
                        component="p"
                        color="text.secondary"
                        sx={{
                          fontWeight: 600,
                          letterSpacing: 0.6,
                          opacity: 0.8
                        }}
                      >
                        Encendido
                      </Typography>
                    ) : (
                      <Typography
                        variant="subtitle2"
                        component="p"
                        color="text.secondary"
                        sx={{
                          fontWeight: 600,
                          letterSpacing: 0.6,
                          opacity: 0.8
                        }}
                      >
                        Apagado
                      </Typography>
                    )
                  }
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Box>
      </Paper>
    </Grid>
  )
}

export default SwitchDevice
