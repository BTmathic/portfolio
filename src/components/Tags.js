import React from 'react';
import Blog from './Blog';

export default (props) => {
  
  return (
    <div>
      <Blog tag={props.match.params.id} />
    </div>
  );
}
