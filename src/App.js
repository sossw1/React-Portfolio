import React, {Component} from 'react';
import M from 'materialize-css';
// Components
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return(
      <>
        <Navbar />
        <Sidenav />
      </>
    );
  }
}

export default App;
