import React, { Component } from 'react';
import M from 'materialize-css';
import './App.css';
// Components
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import Header from './components/Header';
import Section from './components/Section';
import ProfilePicture from './components/ProfilePicture';
import ProfileInfo from './components/ProfileInfo';
import ProjectCard from './components/ProjectCard';
// Images
import takeoffScreenshot from './images/takeoff-screenshot.png';
import purpleScreenshot from './images/purple-planet-screenshot.png';
import playlistScreenshot from './images/my-cool-playlist-screenshot.png';
import weatherScreenshot from './images/weather-dashboard-screenshot.png';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
        <Navbar />
        <Sidenav />
        <Header />
        <Section id='profile' title='Profile' color='cyan'>
          <ProfilePicture />
          <ProfileInfo />
        </Section>
        {/* <Section id='experience' title='Experience' color='teal'>
          
        </Section>
        <Section id='technology' title='Technology' color='green'>
          
        </Section>
        <Section id='education' title='Education' color='amber'>
          
        </Section> */}
        <Section id='projects' title='Projects' color='blue'>
          <ProjectCard
            color='blue' title='Takeoff' screenshot={takeoffScreenshot}
            repositoryLink='https://github.com/sossw1/Takeoff'
            appLink='https://takeoff123.herokuapp.com/'
            description='A travel planning and blogging app that brings your 
            past and future trips together in one place!' />
          <ProjectCard
            color='blue' title='Purple Planet' screenshot={purpleScreenshot}
            repositoryLink='https://github.com/sossw1/project-purple-planet'
            appLink='https://purple-planet.herokuapp.com/'
            description= 'A simple, clean, lightweight and free personal \
            project and task manager!' />
          <ProjectCard
            color='blue' title='My Cool Playlist' screenshot={playlistScreenshot}
            repositoryLink='https://github.com/sossw1/playlist-creator'
            appLink='https://sossw1.github.io/Playlist-Creator/'
            description='A free, private music app for creating playlists and \
            viewing song data!' />
          <ProjectCard
            color='blue' title='Weather Dashboard' screenshot={weatherScreenshot}
            repositoryLink='https://github.com/sossw1/Weather-Dashboard'
            appLink='https://sossw1.github.io/Weather-Dashboard/'
            description='A quick, easy weather app that displays current \
            weather and a 5-day forecast!' />
        </Section>
      </>
    );
  }
}

export default App;
