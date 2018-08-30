import React from 'react';

const AboutMe = (props) => (
  <div id='about-me'>
    <div className='content-container'>
      <h1>About Me</h1>
      <div className='about-me__content'>
        <div>
          <p>I am a web developer with an affinity for problem solving and extensive experience from a decade of programming, and schooling all the way to a PhD in Mathematics.</p>
          <p>I have a diverse set of skills, ranging from HTML, CSS and Javascript, to jQuery, React and Redux, and D3. On top of this I worked for years with Python (and Cython) from working with SageMath. </p>
          <p>I typically code from scratch and enjoy watching the end product come together.</p>
          <p>My current focus is mostly working with React and Redux.</p>
        </div>
        <div className='about-me__photo'>
          <img src='./Images/myAvatar.svg' alt='Avatar of me' />
        </div>
      </div>
      <div className='about-me__footer'>
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
          <span>
            <ul>
              <li>Babel</li>
              <li>Bootstrap</li>
              <li>Chai (Mocha)</li>
              <li>D3</li>
              <li>Firebase</li>
              <li>Git &amp; Github</li>
            </ul>
            <ul>
              <li>Jest</li>
              <li>jQuery</li>
              <li>MongoDB and Mongoose</li>
              <li>Node and Express</li>
              <li>React &amp; Redux</li>
              <li>Webpack</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default AboutMe;