import React from 'react';

export default () => (
  <div id='page-header'>
    <header id='header'>
      <div className='content-container'>
        <div id='header__content'>
          <a href='#top' id='header__title'>
            <h1>AM</h1>
          </a>
          <div id='header__links'>
            <a href='#about-me' className='header-link'>
              About Me
            </a>
            <a href='#projects' className='header-link'>
              Projects
            </a>
            <a href='#dashboard-blog' className='header-link'>
              Blog
            </a>
            <a href='#contact' className='header-link'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
    <div id='introduction'>
      <h1><span id='intro-hello'>Hello</span><span id='intro-hello-mobile'>,</span> I'm Alexander Molnar</h1>
      <h2>I work in web design and development</h2>
      <div id='coding-icons'>
        <div className='icon'>
          <img src='./Images/react-logo.svg' alt='react logo' />
        </div>
        <div className='icon'>
          <img src='./Images/redux-logo.svg' alt='redux logo' />
        </div>
        <div className='icon' id='coding-icons-node'>
          <img src='./Images/nodejs-logo.svg' alt='nodejs logo' />
        </div>
        <div className='icon'>
          <img src='./Images/d3-logo.svg' alt='D3 logo' />
        </div>
      </div>
    </div>
    </div>
);