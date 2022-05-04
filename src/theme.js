import { createTheme } from "@mui/material/styles";
import scrollbar from "./components/scrollbar";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ],
    h1: {
      fontSize: 64,
      fontWeight: 600,
      textAlign: "initial"
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
    body1: {
      fontSize: 16,
      textAlign: "justify"
    },
    body2: {
      fontSize: 14,
      textAlign: "justify"
    },
    body3: {
      fontSize: 24,
      fontWeight: 400
    },
    body4: {
      fontSize: 24,
      fontWeight: 800
    },
    subtitle1: {
      fontSize: 16,
      textDecoration: "underline"
    }, 
    subtitle2: {
      fontSize: 14,
      textDecoration: "underline"
    } 
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
          body3: 'span',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: scrollbar(),
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