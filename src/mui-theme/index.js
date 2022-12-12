// https://mui.com/material-ui/customization/theming/

import { WidthFull } from '@mui/icons-material'
import { createTheme } from '@mui/material'
import { rem } from 'utils/pxToRem'

export default createTheme({
  typography: {
    fontFamily: 'Noto Sans'
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          background: 'transparent',
          '@media (max-width: 600px)': {
            margin: 16,
            width:"100%"
          }
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width: 600px)': {
            paddingLeft: '12px',
            paddingRight: '12px'
          }
        },
        maxWidthLg: {
          '@media (min-width: 1440px)': {
            maxWidth: '1248px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--primary-color)',
          fontSize: 16,
          lineHeight: '28px',
          color: '#fff',
          padding: '8px 56px',
          transition: 'all 0.25s ease-in-out',
          textTransform: 'none',
          borderRadius: 0,
          '&:hover': {
            color: '#fff',
            backgroundColor: 'var(--primary-color)',
            transform: 'translateY(-1px)'
          }
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: '-11px 11px 30px rgba(0, 0, 0, 0.12)',
          borderRadius: 0
        }
      }
    },
     MuiAccordion: {
        styleOverrides: {
          root: {
            background: "#000",
            boxShadow: "none",
            margin: "0px",
            "&.Mui-expanded": {
              margin: "0px"
            }
          } 
        }
      }
  }
})
