import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

import TopBar from './components/TopBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <TopBar />
      </ThemeProvider>
    );
  }
}

export default App;
