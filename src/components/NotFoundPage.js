import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className='not-found'>
    <div>
      <span className='four-oh-four'>404</span>
      <Link to='/'>Go home</Link>
    </div>
  </div>
);

export default NotFoundPage;