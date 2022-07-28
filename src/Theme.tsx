import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    dictionary: {
      fontFamily: string;
    };
    narration: {
      fontFamily: string;
    };
  }

  interface ThemeOptions {
    dictionary: {
      fontFamily: string;
    };
    narration: {
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
  },
  narration: {
    fontFamily: 'Playfair Display,serif'
  }
});

export default theme;
