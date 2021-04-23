import React from 'react';
import profilePictureImage from '../images/profile-picture.jpg';

function ProfilePicture() {
  return (
    <div className='col s4 right-align'>
      <img
        id='profile-picture' className='responsive-img circle'
        src={profilePictureImage} alt='Profile' width='200px'
      />
    </div>
  );
}

export default ProfilePicture;