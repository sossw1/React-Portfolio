import React, {Component} from 'react';
import M from 'materialize-css';
// Components
import Navbar from './components/Navbar';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return(
      <>
        <Navbar />
      </>
    );
  }
}

export default App;
