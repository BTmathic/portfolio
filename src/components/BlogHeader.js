import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <div id='blog-header'>
    <div id='blog-header-text'>
      <h2>Alexander Molnar</h2>
      <h3>Musings of a developer</h3>
    </div>
    <div id='blog-header-buttons'>
      <NavLink to="/blog" activeClassName='is-active' className='blog-header-button'>Blog</NavLink>
      <NavLink to="/" activeClassName='is-active' exact={true} className='blog-header-button'>Portfolio</NavLink>
      <Link to="/#about-me" className='blog-header-button'>About</Link>
      <Link to="/#contact" className='blog-header-button'>Contact</Link>
      { props.id && <NavLink to='/create' activeClassName='is-active' id='blog-new-post'>New Post</NavLink> }
      { props.id && <NavLink to='/login' activeClassName='is-active' onClick={props.startLogout} id='blog-logout'>Logout</NavLink> }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    id: state.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);