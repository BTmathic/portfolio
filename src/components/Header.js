import React from 'react';

export default () => (
  <div className='page-header'>
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <a href='#top' className='header__title'>
            <h1>AM</h1>
          </a>
          <div className='header__links'>
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
    <div className='introduction'>
      <h1><span className='intro-hello'>Hello</span><span className='intro-hello-mobile'>,</span> I'm Alexander Molnar</h1>
      <h2>I work in web design and development</h2>
      <div className='coding-icons'>
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