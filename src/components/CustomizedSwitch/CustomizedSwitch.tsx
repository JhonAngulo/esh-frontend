import { ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import { FunctionComponent } from 'react'

const MaterialUISwitch: FunctionComponent<ButtonProps> = styled(
  ({ ...props }) => <Switch {...props} />
)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    color: 'inherit',

    '&.Mui-checked': {
      color: theme.palette.common.white,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.common.black
      }
    }
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.common.black
  }
}))

const CustomSwitch = ({ ...props }): JSX.Element => {
  return <MaterialUISwitch {...props} />
}

export default CustomSwitch
