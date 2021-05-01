import React from 'react';
import headerImage from '../images/tech-background.jpg';

function Header() {
  return (
    <header>
      <div className='parallax-container'>
        <div className='parallax'>
          <img src={headerImage} alt='Tech background' />
        </div>
        <h1 className='center-align white-text'>William Soss</h1>
        <h4 className='center-align white-text'>Full Stack Web Developer</h4>
      </div>
    </header>
  );
}

export default Header;