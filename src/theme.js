import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ],
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 24,
      fontWeight: 500
    },
    h3: {
      fontSize: 20,
      fontWeight: 400
    },
    h4: {
      fontSize: 16,
      fontWeight: 400
    },
    h5: {
      fontSize: 12,
      fontWeight: 500
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          subtitle1: 'sub1',
          subtitle2: 'sub2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
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