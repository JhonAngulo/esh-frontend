import { Components, Theme } from '@mui/material'

export default function Paper(_theme: Theme): Components {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },

      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  }
}
