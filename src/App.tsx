import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from './Theme';
import Intro from './components/Intro';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ backgroundColor: theme.palette.grey[300], minHeight: '100vh' }}
      >
        <Intro />
      </Box>
    </ThemeProvider>
  );
}

export default App;
