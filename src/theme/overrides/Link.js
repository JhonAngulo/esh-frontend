// ----------------------------------------------------------------------

export default function Link(theme) {
    return {
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
    };
  }
  