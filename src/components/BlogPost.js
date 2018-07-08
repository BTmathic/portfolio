import React from 'react';
import moment from 'moment';
import marked from 'marked';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, postBody, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
    </Link>
    <div dangerouslySetInnerHTML={{__html: marked(postBody, {sanitize: true })}}></div>
    <div>tags</div>  
    <div>{moment(createdAt).format('MMMM Do, YYYY')}</div>
  </div>
);

export default BlogPost;