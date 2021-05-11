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
import Row from './components/Row';
import TechCard from './components/TechCard';
// Images
import takeoffScreenshot from './images/screenshots/takeoff-screenshot.png';
import purpleScreenshot from './images/screenshots/purple-planet-screenshot.png';
import playlistScreenshot from './images/screenshots/my-cool-playlist-screenshot.png';
import weatherScreenshot from './images/screenshots/weather-dashboard-screenshot.png';
// Logos
import bootstrapLogo from './images/logos/Bootstrap.png';
import cssLogo from './images/logos/CSS.png';
import expressLogo from './images/logos/Express.png';
import githubLogo from './images/logos/GitHub.png';
import herokuLogo from './images/logos/Heroku.png';
import htmlLogo from './images/logos/HTML.png';
import javascriptLogo from './images/logos/JavaScript.png';
import jestLogo from './images/logos/Jest.png'
import materializeLogo from './images/logos/MaterializeCSS.png';
import mongodbLogo from './images/logos/MongoDB.png';
import mysqlLogo from './images/logos/MySQL.png';
import nodejsLogo from './images/logos/NodeJS.png';
import reactLogo from './images/logos/React.png';
import reduxLogo from './images/logos/Redux.png';
import travisLogo from './images/logos/Travis.png';
import vscodeLogo from './images/logos/VSCode.png';
// Education
import uconn from './images/UConn.png';
import southern from './images/Southern.png';

const logos = [
  { name: 'JavaScript', image: javascriptLogo },
  { name: 'HTML', image: htmlLogo },
  { name: 'CSS', image: cssLogo },
  { name: 'NodeJS', image: nodejsLogo },
  { name: 'GitHub', image: githubLogo },
  { name: 'Express', image: expressLogo },
  { name: 'React.js', image: reactLogo },
  { name: 'Redux', image: reduxLogo },
  { name: 'MongoDB', image: mongodbLogo },
  { name: 'MySQL', image: mysqlLogo },
  { name: 'Materialize', image: materializeLogo },
  { name: 'Bootstrap', image: bootstrapLogo },
  { name: 'Heroku', image: herokuLogo },
  { name: 'Travis CI', image: travisLogo },
  { name: 'Jest', image: jestLogo },
  { name: 'VSCode', image: vscodeLogo }
];

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
        <main>
          <Section id='profile' title='Profile' color='cyan'>
            <ProfilePicture />
            <ProfileInfo />
          </Section>

          <Section id='projects' title='Projects' color='blue'>
            <ProjectCard
              color='blue' title='Takeoff' screenshot={takeoffScreenshot}
              repositoryLink='https://github.com/sossw1/Takeoff'
              appLink='https://takeoff123.herokuapp.com/'
              description='A travel planning and blogging app that brings your 
              past and future trips together in one place!'
              contribution='Created database with Mongoose models, 
              structured API routes, implemented authentication for registration 
              and login, set up API requests, and managed global state.' />
            <ProjectCard
              color='blue' title='Purple Planet' screenshot={purpleScreenshot}
              repositoryLink='https://github.com/sossw1/project-purple-planet'
              appLink='https://purple-planet.herokuapp.com/'
              description='A simple, clean, lightweight and free personal 
              project and task manager!'
              contribution='Set up MySQL database, created ORM using Sequelize, 
              made Express API and HTML routes, connected data to front end 
              using Handlebars.' />
            <ProjectCard
              color='blue' title='My Cool Playlist' screenshot={playlistScreenshot}
              repositoryLink='https://github.com/sossw1/playlist-creator'
              appLink='https://sossw1.github.io/Playlist-Creator/'
              description='A free, private music app for creating playlists and 
              viewing song data!'
              contribution='Third-party API integration using AJAX requests, 
              DOM manipulation using JQuery, local storage management, 
              created dynamic search functionality.' />
            <ProjectCard
              color='blue' title='Weather Dashboard' screenshot={weatherScreenshot}
              repositoryLink='https://github.com/sossw1/Weather-Dashboard'
              appLink='https://sossw1.github.io/Weather-Dashboard/'
              description='A quick, easy weather app that displays current 
              weather and a 5-day forecast!'
              contribution='Independently developed using HTML, CSS, JavaScript, 
              JQuery and OpenWeather API' />
          </Section>

          <Section id='technology' title='Technology' color='green'>
            {logos.map((logo, index) => {
              return (<TechCard key={index} color='green' name={logo.name} logo={logo.image} />)
            })}
          </Section>

          <Section id='education' title='Education' color='amber'>
            <div className='container'>
              <div className='card amber lighten-2'>
                <Row>
                  <div className='card-content'>
                    <div className='col s3'>
                      <div className='right-align'>
                        <img className='responsive-img school-img' src={uconn}
                          alt='UConn logo' width='100px' />
                      </div>
                    </div>
                    <div className='col s9'>
                      <span>
                        Certificate in Web Development - University of Connecticut<br />
                        <sup>Apr 2021</sup><br />
                        <em>Immersive MERN stack program focused on developing
                        responsive, dynamic, user-friendly web applications.</em>
                      </span>
                    </div>
                  </div>
                </Row>
              </div>

              <div className='card amber lighten-2'>
                <Row>
                  <div className='card-content'>
                    <div className='col s3'>
                      <div className='right-align'>
                        <img className='responsive-img' src={southern}
                          alt='SCSU logo' width='100px' />
                      </div>
                    </div>
                    <div className='col s9'>
                      <span>
                        Bachelor of Arts in Mathematics - Southern Connecticut
                        State University<br />
                        <sup>May 2015</sup><br />
                        <em>Graduated from the Honors College Program with
                        departmental honors from the Mathematics Department for an 
                        undergraduate thesis in the field of Graph Theory.</em>
                      </span>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </Section>
        </main>
      </>
    );
  }
}

export default App;
