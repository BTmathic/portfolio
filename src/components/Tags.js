import React from 'react';
import Blog from './Blog';

export default (props) => (
  <Blog tag={props.match.params.id} />
)