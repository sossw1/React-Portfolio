import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from './Theme';
import Greeter from './components/Greeter';
import Definition from './components/Definition';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ backgroundColor: theme.palette.grey[300], minHeight: '100vh' }}
      >
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Greeter />
          <Definition />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
