import { Components } from '@mui/material'

export default function Autocomplete(theme: any): Components {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20
        }
      }
    }
  }
}
