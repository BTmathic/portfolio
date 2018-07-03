import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <header>
    <h1>Blog</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Blog</NavLink>
    <NavLink to='/create' activeClassName="is-active">New Post</NavLink>
  </header>
)