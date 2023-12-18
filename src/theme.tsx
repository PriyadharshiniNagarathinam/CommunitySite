import { createTheme } from '@mui/material/styles'
import { red, grey } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#020617',
    },
    secondary: {
      main: '#84cc16',
    },
    text: {
      primary: grey[900],
      secondary: grey[500],
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
