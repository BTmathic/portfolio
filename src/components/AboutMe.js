import React from 'react';

const AboutMe = (props) => (
  <div id='about-me'>
    <div className='content-container'>
      <h1>About Me</h1>
      <div id='about-me-content'>
        <div id='about-me-text'>
          <p id='hello'>I am a web developer with an affinity for problem solving and extensive experience from a decade of programming, and schooling all the way to a PhD in Mathematics.</p>
          <p id='sub-hello'>I have a diverse set of skills, ranging from HTML, CSS and Javascript, to jQuery, React and Redux, and D3. On top of this I worked for years with Python (and Cython) from working with SageMath. </p>
          <p>I typically code from scratch and enjoy watching the end product come together.</p>
          <p>My current focus is mostly working with React and Redux.</p>
        </div>
        <div id='about-me-photo'>
          <img src='./Images/myAvatar.svg' alt='Avatar of me' />
        </div>
      </div>
      <div id='about-me-footer'>
        <div>
          <h3>Langagues I speak:</h3>
          <span>
          <ul>
            <li>CSS</li>  
            <li>HTML</li>
            <li>JavaScript</li>
            <li>JSX</li>
            <li>SCSS</li>
          </ul>
          </span>
        </div>
        <div>
          <h3>Frameworks, libraries and tools I am familiar with:</h3>
          <span id='dev-tools'>
            <ul>
              <li>Babel</li>
              <li>Bootstrap</li>
              <li>Codepen</li>
              <li>D3</li>
              <li>Git &amp; Github</li>
            </ul>
            <ul>
              <li>jQuery</li>
              <li>Node, npm and Yarn</li>
              <li>React &amp; Redux</li>
              <li>Visual Studio Code</li>
              <li>Webpack</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default AboutMe;