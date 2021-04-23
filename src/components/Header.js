import React from 'react';
import headerImage from '../images/tech-background.jpg';

function Header() {
  return (
    <div class="parallax-container">
      <div class="parallax">
        <img src={headerImage} alt="Tech background" />
      </div>
      <h1 class="center-align white-text">William Soss</h1>
      <h4 class="center-align white-text">Full Stack Web Developer</h4>
    </div>
  );
}

export default Header;