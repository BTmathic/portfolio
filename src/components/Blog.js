import React from 'react';
import BlogPosts from './BlogPosts';
import BlogHeader from './BlogHeader';
import BlogFilters from './BlogFilters';

const Blog = (props) => (
  <div className='blog'>
    <div className='content-container'>
      <BlogHeader />
      <BlogFilters />
      <BlogPosts tag={props.tag}/>
      <div id='blog-footer'>
        Powered by Redux
      </div>
    </div>
  </div>
)
  
export default Blog;