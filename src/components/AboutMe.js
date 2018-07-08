import React from 'react';

const AboutMe = () => (
  <div id='about-me'>
    <div className='content-container'>
      <h1>About Me</h1>
      <div id='about-me-content'>
        <div id='about-me-text'>
          <p id='hello'>I am a web developer with an affinity for problem solving and extensive experience from a decade of programming, and schooling all the way to a PhD in Mathematics.</p>
          <p id='sub-hello'>I have a diverse set of skills, ranging from HTML, CSS and Javascript, to jQuery, React and Redux, and D3. On top of this I worked for years with Python (and Cython) from working with SageMath. </p>
          <p>My current focus is mostly working with React.</p>
        </div>
        <div id='about-me-photo'>
          <img src='./Images/myAvatar.svg' alt='Avatar of me' />
        </div>
      </div>
    </div>
  </div>
)

export default AboutMe;