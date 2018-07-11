import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header>
    <h1>Blog</h1>
    { props.id && <NavLink to='/create' activeClassName="is-active">New Post</NavLink> }
    { props.id && <button onClick={props.startLogout}>Logout</button> }
  </header>
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