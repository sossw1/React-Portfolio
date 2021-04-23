import React from 'react';
import profilePictureImage from '../images/profile-picture.jpg';

function ProfilePicture() {
  return (
    <div class="col s4 right-align">
      <img
        id="profile-picture" class="responsive-img circle"
        src={profilePictureImage} alt="Profile" width="200px"
      />
    </div>
  );
}

export default ProfilePicture;