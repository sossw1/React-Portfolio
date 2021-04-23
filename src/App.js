import React, {Component} from 'react';
import M from 'materialize-css';
import './App.css';
// Components
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Header from './components/Header';
import Section from './components/Section';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return(
      <>
        <Navbar />
        <Sidenav />
        <Header />
        <Section id='profile' title='Profile' color='cyan'>
          
        </Section>
        {/* <Section id='experience' title='Experience' color='teal'>
          
        </Section>
        <Section id='technology' title='Technology' color='green'>
          
        </Section>
        <Section id='education' title='Education' color='amber'>
          
        </Section> */}
        <Section id='projects' title='Projects' color='blue'>
          
        </Section>
      </>
    );
  }
}

export default App;
