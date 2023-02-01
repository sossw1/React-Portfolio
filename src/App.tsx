import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from './Theme';
import About from './components/About';
import Projects from './components/Projects';

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
          <About />
          <Projects />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
