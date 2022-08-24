import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    sans: {
      fontFamily: string;
    };
    serif: {
      fontFamily: string;
    };
  }

  interface ThemeOptions {
    sans: {
      fontFamily: string;
    };
    serif: {
      fontFamily: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#00e5ff'
    },
    secondary: {
      main: '#ffc107'
    }
  },
  sans: {
    fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'
  },
  serif: {
    fontFamily: 'Playfair Display,serif'
  }
});

export default theme;
