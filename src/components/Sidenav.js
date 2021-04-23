import React from 'react';

function Sidenav() {
  return (
    <ul id="slide-out" class="sidenav sidenav-fixed blue-grey darken-4">
      <li>
        <a href="#home" class="white-text"><i class="material-icons white-text">home</i>Home</a>
      </li>
      <li>
        <a href="#profile" class="white-text"><i class="material-icons white-text">assignment_ind</i>Profile</a>
      </li>
      {/* <li>
        <a href="#experience" class="white-text"><i class="material-icons white-text">location_city</i>Experience</a>
      </li>
      <li>
        <a href="#technology" class="white-text"><i class="material-icons white-text">personal_video</i>Technology</a>
      </li>
      <li>
        <a href="#education" class="white-text"><i class="material-icons white-text">school</i>Education</a>
      </li> */}
      <li>
        <a href="#projects" class="white-text"><i class="material-icons white-text">wb_incandescent</i>Projects</a>
      </li>
    </ul>
  );
}

export default Sidenav;