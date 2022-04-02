import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ],
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#2B2C28',
    },
    primary: {
      main: '#7DE2D1',
      contrastText: '#000',
    },
    secondary: {
      main: '#4B4B4B',
      contrastText: '#FFF',
    },
    third: {
      main: '#131515',
      contrastText: '#FFF',
    },
  },
});

export default theme;