import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <div>
    <header id='header'>
      <div className='content-container'>
        <div id='header__content'>
          <Link id='header__title' to="/">
            <h1>Alexander Molnar</h1>
          </Link>
          <a href='#about-me' className='header-link'>About Me</a>
          <a href='#projects' className='header-link'>Projects</a>
          <a href='#contact' className='header-link'>Contact</a>
          <a href='#blog' className='header-link'>Blog</a>
        </div>
      </div>
    </header>
    <div id='landing-image'>
      <div id='landing-image-overlay'>
        <h2>Web design and development</h2>
        <div id='coding-icons'>
          <div className='icon'>
            <img src='./Images/react-logo.svg' alt='react logo' />
          </div>
          <div className='icon'>
            <img src='./Images/redux-logo.svg' alt='redux logo' />
          </div>
          <div id='coding-icons-node'>
            <img src='./Images/nodejs-logo.svg' alt='nodejs logo' />
          </div>
          <div className='icon'>
            <img src='./Images/d3-logo.svg' alt='D3 logo' />
          </div>
        </div>
      </div>
      <img src='./Images/workspace.jpg' alt='image of workspace' />
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);