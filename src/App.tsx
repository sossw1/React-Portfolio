import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import Intro from './components/Intro';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Intro />
    </ThemeProvider>
  );
}

export default App;
