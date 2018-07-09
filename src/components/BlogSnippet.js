import React from 'react';
import marked from 'marked';
import { Link } from 'react-router-dom';

export default (props) => (
  <div className='blog-post-snippet'>
    <h2>{props.post.title}</h2>
    <div className='post-snippet'>
      <div dangerouslySetInnerHTML={{ 
        __html: marked(props.post.postBody.split(/\s+/).slice(0,50).join(' ').concat('...')
        , { sanitize: true }) }}>
      </div>
      <Link to={`/read/${props.post.id}`}>
        Continue reading...
      </Link>
    </div>
  </div>
);
