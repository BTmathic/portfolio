import React from 'react';
import Blog from './Blog';

export default (props) => (
  <div>
    <Blog tag={props.match.params.id} />
  </div>
);
