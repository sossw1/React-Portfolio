import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from './Theme';
import Greeter from './components/Greeter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[300],
          minHeight: 'calc(100vh + 1px)'
        }}
      >
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Greeter />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
