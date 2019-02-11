import React from 'react';

const githubLogo = require('../../public/Images/github-logo.png');
const codepenLogo = require('../../public/Images/codepen-logo.png');
const linkedInLogo = require('../../public/Images/linkedin-logo.png');
const emailImage = require('../../public/Images/email.png');

const Contact = () => (
  <div id='contact'>
    <div className='content-container'>
      <h1>Contact</h1>
      <div>
        Want to get in touch with me? Whether to collaborate, to ask about my experience or my resume, coding questions or anything
        to do with triathlon or greyhounds, feel free to drop me a line.
      </div>
      <div className='contact__options'>
        <div>
          <a target='_blank' href='https://github.com/BTmathic'><img src={githubLogo} alt='GitHub link' className='socials-icon'/></a>
          <a target='_blank' href='https://codepen.io/brokentriathlete/'><img src={codepenLogo} alt='Codepen logo' className='socials-icon'/></a>
          <a target='_blank' href='https://www.linkedin.com/in/alexander-molnar-7635b5177/'><img src={linkedInLogo} alt='LinkedIn link' className='socials-icon' /></a>
        </div>
        <div className='contact__options-email'>
          <a target='_blank' href='mailto:mathic@gmail.com'><img src={emailImage} alt='Email' className='socials-icon' /></a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;