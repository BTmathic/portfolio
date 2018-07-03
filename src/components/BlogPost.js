import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, postBody, createdAt}) => (
  <Link to={`/edit/${id}`}>
    <div>
      <h3>{title}</h3>
      <div>{postBody}</div>
      
      <div>{moment(createdAt).format('MMMM Do, YYYY')}</div>
    </div>
  </Link>
);

export default BlogPost;