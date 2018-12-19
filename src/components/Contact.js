import React from 'react';

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
          <a target='_blank' href='https://github.com/BTmathic'><img src='Images/github-logo.png' alt='GitHub link' className='socials-icon'/></a>
          <a target='_blank' href='https://codepen.io/brokentriathlete/'><img src='Images/codepen-logo.png' alt='Codepen logo' className='socials-icon'/></a>
          <a target='_blank' href='https://www.linkedin.com/in/alexander-molnar-7635b5177/'><img src='Images/linkedin-logo.png' alt='LinkedIn link' className='socials-icon' /></a>
        </div>
        <div className='contact__options-email'>
          <a target='_blank' href='mailto:mathic@gmail.com'><img src='Images/email.png' alt='Email' className='socials-icon' /></a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;