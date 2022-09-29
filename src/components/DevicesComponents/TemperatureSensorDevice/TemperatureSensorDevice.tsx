import {
  Box,
  Grid,
  IconButton,
  Paper,
  Theme,
  Typography,
  useTheme
} from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Air, AcUnit } from '@mui/icons-material'

import { useEffect, useState } from 'react'

const DoorSensorDevice = ({
  device,
  variables,
  sendEvent
}: any): JSX.Element => {
  const [temp, setTemp] = useState(
    variables.filter((item: any) => item.name === 'temp')[0].value
  )

  useEffect(() => {
    // setArmed(device.armed)
    setTemp(variables.filter((item: any) => item.name === 'temp')[0].value)
    // setBattery(variables.filter((item) => item.name === 'battery')[0].value)
  }, [variables])

  // const handleChangeState: () => void = () => {
  // setState((prevState) => !prevState)
  // sendEvent({
  //   id: variables.filter((item) => item.name === 'motion')[0].id,
  //   eventType: 'item_updated',
  //   value: !state
  // })
  // }

  const handleTempIcon: () => JSX.Element = () => {
    if (temp.value >= 28) {
      return (
        <WbSunnyIcon
          sx={{ height: 48, width: 48, opacity: 0.6 }}
          htmlColor="white"
        />
      )
    } else if (temp.value >= 25) {
      return (
        <Air sx={{ height: 48, width: 48, opacity: 0.6 }} htmlColor="#90fb7d" />
      )
    } else {
      return (
        <AcUnit
          sx={{ height: 48, width: 48, opacity: 0.6 }}
          htmlColor="black"
        />
      )
    }
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
          <IconButton aria-label="icon_device">{handleTempIcon()}</IconButton>
          <Typography variant="subtitle2" color="inherit" component="div">
            {temp.value}° {temp.scale}
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
              pb: '54px'
            }}
          ></Box>
        </Box>
      </Paper>
    </Grid>
  )
}

export default DoorSensorDevice
