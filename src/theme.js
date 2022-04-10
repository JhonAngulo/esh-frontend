import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          '&.menu': {
            textDecoration: 'none',
          },
          '&.menu.active > .MuiButtonBase-root': {
            backgroundColor: '#5b7ff74d'
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#5b7ff7',
    },
    secondary: {
      main: '#4059ad',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#f6fbf9',
      default: '#ffffff'
    },
    text: {
      primary: '#2e384d',
      secondary: '#8c9cb1'
    },
  },
});

export default theme;
