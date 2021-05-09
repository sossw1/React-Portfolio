import React from 'react';

function ProfileInfo() {
  return (
    <div className='col s8'>
      <div className='row'>
        <div className='col s4 right-align'>Name</div>
        <div className='col s8'>Bill Soss</div>
      </div>
      <div className='row'>
        <div className='col s4 right-align'>Location</div>
        <div className='col s8'>Derby, CT</div>
      </div>
      <div className='row'>
        <div className='col s4 right-align'>Email</div>
        <div className='col s8'>sossw1@gmail.com</div>
      </div>
      <div className='row'>
        <div className='col s4 right-align'>GitHub</div>
        <div className='col s8'>
          <a href='https://github.com/sossw1' target='_blank' rel='noreferrer'>
            sossw1
          </a>
        </div>
      </div>
      <div className='row'>
        <div className='col s4 right-align'>LinkedIn</div>
        <div className='col s8'>
          <a href='https://www.linkedin.com/in/william-soss/' target='_blank' rel='noreferrer'>
            William Soss
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;