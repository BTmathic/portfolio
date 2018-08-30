import React from 'react';
import marked from 'marked';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default (props) => (
  <div className='blog-post-snippet'>
    <div className='blog-post-snippet__date'>
      { moment(props.post.createdAt).format('MMMM Do, YYYY') }
      {!props.post.visible && <div>Not visible</div>}
    </div>
    <h3>{props.post.title}</h3>
    <div>
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
