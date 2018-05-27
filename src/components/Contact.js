import React from 'react';

const Contact = () => (
  <div id='contact'>
    <div className='content-container'>
      <h1>Contact</h1>
      <div id='reach-out'>
        Want to get in touch with me? Whether to ask about me, my experience or my resume, general math or coding questions or anything
        to do with triathlon or other passions you may have, feel free to drop me a line.
      </div>
      <div id='contact-options'>
        <div id='other-contact'>
          <a href='https://github.com/BTmathic'><img src='/Images/github-logo.png' alt='GitHub link' className='icon'/></a>
          <a href='https://twitter.com/BrokeTriathlete'><img src='/Images/twitter-logo.png' alt='Twitter link' className='icon' /></a>
          <a href='#'><img src='Images/linkedin-logo.png' alt='LinkedIn link' className='icon' /></a>
        </div>
        <div id='email'>
          Email: mathic [at.] gmail _._dot_ com
        </div>
      </div>
    </div>
  </div>
);

export default Contact;