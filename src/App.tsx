import { ThemeProvider } from '@mui/material/styles';
import Intro from './components/Intro';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Intro />
    </ThemeProvider>
  );
}

export default App;
