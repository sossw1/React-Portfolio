import React from 'react';

function ProfileInfo() {
  return (
    <div class="col s8">
      <div class="row">
        <div class="col s4 right-align">Name</div>
        <div class="col s8">William ("Bill") Soss</div>
      </div>
      <div class="row">
        <div class="col s4 right-align">Location</div>
        <div class="col s8">Derby, CT</div>
      </div>
      <div class="row">
        <div class="col s4 right-align">Email</div>
        <div class="col s8">sossw1@gmail.com</div>
      </div>
      <div class="row">
        <div class="col s4 right-align">GitHub</div>
        <div class="col s8">
          <a href="https://github.com/sossw1" target="_blank" rel="noreferrer">
            sossw1
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col s4 right-align">LinkedIn</div>
        <div class="col s8">
          <a href="https://www.linkedin.com/in/william-soss/" target="_blank" rel="noreferrer">
            William Soss
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;