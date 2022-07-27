import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    dictionary: {
      fontFamily: string;
    };
  }

  interface ThemeOptions {
    dictionary: {
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
  dictionary: {
    fontFamily: 'Open Sans,Helvetica,Arial,sans-serif'
  }
});

export default theme;
