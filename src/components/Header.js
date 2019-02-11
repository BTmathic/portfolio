import React from 'react';

const reactLogo = require('../../public/Images/react-logo.svg');
const reduxLogo = require('../../public/Images/redux-logo.svg');
const nodeLogo = require('../../public/Images/nodejs-logo.svg');
const d3Logo = require('../../public/Images/d3-logo.svg');

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
          <img src={reactLogo} alt='react logo' />
        </div>
        <div className='icon'>
          <img src={reduxLogo} alt='redux logo' />
        </div>
        <div className='icon coding-icons-node'>
          <img src={nodeLogo} alt='nodejs logo' />
        </div>
        <div className='icon'>
          <img src={d3Logo} alt='D3 logo' />
        </div>
      </div>
    </div>
    </div>
);