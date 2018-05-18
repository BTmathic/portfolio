import React from 'react';

const Contact = () => (
  <div id='contact'>
    <div className='content-container'>
      <h1>Contact</h1>
      <div id='reach-out'>
        Want to get in touch with me? Whether to ask about me, my experience or my resume, general math or coding questions or anything
        to do with triathlon or other passions you may have, feel free to drop me a line in any of the following ways.
    </div>
      <div id='email'>
        Email: mathic [at] gmail __dot_ com
    </div>
      <div id='other-contact'>
        <a href='https://github.com/BTmathic' className='fa fa-fw- fa-github'>Github</a>
        <a href='https://twitter.com/BrokeTriathlete' className='fa fa-fw fa-twitter'>Twitter</a>
        <a href='#' className='fa fa-fw fa-linkedin'>LinkedIn</a>
      </div>
    </div>
  </div>
);

export default Contact;