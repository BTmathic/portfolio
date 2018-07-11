import React from 'react';
import marked from 'marked';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default (props) => (
  <div className='blog-post-snippet'>
    <h2>{props.post.title}</h2>
    <div className='snippet-post-date'>
    {
      moment(props.post.createdAt).format('MMMM Do, YYYY')
    }
    </div>
    <div className='post-snippet'>
      <div dangerouslySetInnerHTML={{ 
        __html: marked(props.post.postBody.split(/\s+/).slice(0,50).join(' ').concat('...')
        , { sanitize: true }) }}>
      </div>
      <Link to={`/read/${props.post.id}`} onClick={() => {window.scrollTo(0,0)}}>
        Continue reading...
      </Link>
    </div>
  </div>
);
