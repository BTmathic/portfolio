import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();

const BlogPost = ({ id, title, postBody, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
    </Link>
    <div>{htmlToReactParser.parse(postBody)}</div>
    <div>tags</div>  
    <div>{moment(createdAt).format('MMMM Do, YYYY')}</div>
  </div>
);

export default BlogPost;