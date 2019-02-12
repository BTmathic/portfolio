import React from 'react';

const fccLogo = require('../../public/Images/freeCodeCamp.png');
const hacktoberfestLogo = require('../../public/Images/hacktober.png');

export default () => (
  <div className='open-source'>
    <p>I have had the pleasure of helping contribute to the following open source projects and initiatives</p>
    <div className='open-source--logos'>
      <div className='fcc-logo'><a target='_blank' href='https://www.freecodecamp.org/'><img src={fccLogo} alt='FreeCodeCamp logo' /></a></div>
      <div className='hack-logo'><a target='_blank' href='https://hacktoberfest.digitalocean.com/'><img src={hacktoberfestLogo} alt='Hacktoberfest logo' /></a></div>
    </div>
  </div>
);