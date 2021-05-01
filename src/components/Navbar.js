import React from 'react';

function Navbar() {
  return (
    <nav>
      <div id='home' className='nav-wrapper blue-grey darken-4'>
        <a href='#nav' data-target='slide-out' className='sidenav-trigger'>
          <i className='material-icons'>menu</i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;