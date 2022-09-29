import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Paper,
  Theme,
  Typography,
  useTheme
} from '@mui/material'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'

import { useEffect, useState } from 'react'
import CustomizedSwitch from '@components/CustomizedSwitch'

const DoorSensorDevice = ({
  device,
  variables,
  sendEvent
}: any): JSX.Element => {
  const [tripped, setTripped] = useState(
    variables.filter((item: any) => item.name === 'dw_state')[0].value ===
      'dw_is_opened'
  )
  const [battery, setBattery] = useState(
    variables.filter((item: any) => item.name === 'battery')[0].value
  )
  const [armed, setArmed] = useState(device.armed)

  useEffect(() => {
    setArmed(device.armed)
    setTripped(
      variables.filter((item: any) => item.name === 'dw_state')[0].value ===
        'dw_is_opened'
    )
    setBattery(
      variables.filter((item: any) => item.name === 'battery')[0].value
    )
  }, [variables])

  const handleChangeState: any = () => {
    // setState((prevState) => !prevState)
    // sendEvent({
    //   id: variables.filter((item) => item.name === 'motion')[0].id,
    //   eventType: 'item_updated',
    //   value: !state
    // })
  }

  const theme: Theme = useTheme()
  return (
    <Grid item>
      <Paper
        elevation={8}
        sx={{
          borderRadius: '24px 48px 24px 48px',
          width: '180px',
          height: '200px',
          backgroundColor: '#009EFA',
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
            <MeetingRoomIcon
              sx={{ height: 48, width: 48, opacity: 0.6 }}
              htmlColor={`${tripped ? 'red' : '#000'}`}
            />
          </IconButton>
          <Typography variant="subtitle2" color="inherit" component="div">
            {battery}%
          </Typography>
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
              backgroundColor: '#00000042',
              width: '100%',
              textAlign: 'center',
              letterSpacing: 0.6
            }}
          >
            <Typography
              component="h6"
              variant="subtitle1"
              noWrap
              color={theme.palette.common.white}
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
                      checked={armed}
                      onChange={handleChangeState}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  }
                  label={
                    armed === true ? (
                      <Typography
                        variant="subtitle2"
                        component="p"
                        sx={{
                          fontWeight: 600,
                          color: '#000',
                          letterSpacing: 0.6,
                          opacity: 0.8
                        }}
                      >
                        Armado
                      </Typography>
                    ) : (
                      <Typography
                        variant="subtitle2"
                        component="p"
                        sx={{
                          fontWeight: 600,
                          color: '#000',
                          letterSpacing: 0.6,
                          opacity: 0.8
                        }}
                      >
                        Desarmado
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

export default DoorSensorDevice
