import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        
      </ThemeProvider>
    );
  }
}

export default App;
