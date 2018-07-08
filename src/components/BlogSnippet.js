import React from 'react';
import marked from 'marked';

export default (props) => (
  <div id='blog-post'>
    <h2>{props.post.title}</h2>
    <div id='blog-snippet'>
      <div dangerouslySetInnerHTML={{ 
        __html: marked(props.post.postBody.split(/\s+/).slice(0,50).join(' ')
        , { sanitize: true }) }}>
      </div>
      <span className='end-of-snippet'>...</span>
    </div>
  </div>
);
