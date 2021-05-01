import React from 'react';

function Navbar() {
  return (
    <>
      <div id='home'></div>
      <div className='navbar-fixed hide-on-large-only'>
        <nav>
          <div className='nav-wrapper blue-grey darken-4'>
            <a href='#nav' data-target='slide-out' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;