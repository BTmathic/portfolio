import React from 'react';

const AboutMe = () => (
  <div>
    <div className='section-wrapper'></div>
    <div className='content-container' id='about-me'>
      <h1>About Me</h1>
      <div id='about-me-content'>
        <div id='about-me-text'>
          <p id='hello'>Hello! My name is Alexander Molnar and I am a front end developer with an affinity for problem solving and extensive experience from a decade of programming, schooling, and a PhD in Mathematics.</p>
          <p id='sub-hello'>I have a diverse set of skills, ranging from HTML, CSS and Javascript, to jQuery, React and Redux. </p>
        </div>
        <div id='about-me-photo'>
          <img src='./Images/placeholder.jpg' alt='photo of me' />
        </div>
      </div>
    </div>
  </div>
)

export default AboutMe;