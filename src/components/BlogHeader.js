import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { startLogout } from '../actions/auth';

const Header = (props) => (
  <div className='blog-header'>
    <div className='blog-header__text'>
      <h2>Alexander Molnar</h2>
      <h3>Musings of a developer</h3>
    </div>
    <div className='blog-header__buttons'>
      <div>
        <NavLink to="/blog" activeClassName='is-active' className='blog-header--button'>Blog</NavLink>
        <Link to="/#projects" className='blog-header--button blog-header--desktop-only'>Portfolio</Link>
        <Link to="/#about-me" className='blog-header--button blog-header--about'>About</Link>
        <Link to="/#contact" className='blog-header--button'>Contact</Link>
        {props.id && <span className='blog-header--button'></span>}
        {props.id && <NavLink to='/create' activeClassName='is-active' className='blog-header--button blog-header--desktop-only'>New Post</NavLink>}
        {props.id && <NavLink to='/login' activeClassName='is-active' onClick={props.startLogout} className='blog-header--button blog-header--desktop-only'>Logout</NavLink>}
      </div>
      <div>
        <span
          className='blog-header__menu-mobile blog-header--button'
          onClick={() => { props.toggleMenu() }}
        >
          Menu
          </span>
      </div>
    </div>
  </div>
);
  
const mapStateToProps = (state) => ({
  id: state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);