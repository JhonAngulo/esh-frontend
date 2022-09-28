import { Components, Theme } from '@mui/material'

export default function Link(theme: Theme): Components {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          '&.menu': {
            textDecoration: 'none'
          },
          '&.menu.active > .MuiButtonBase-root': {
            backgroundColor: '#5b7ff74d'
          }
        }
      }
    }
  }
}
