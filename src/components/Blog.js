import React from 'react';
import BlogFilters from './BlogFilters';
import BlogHeader from './BlogHeader';
import BlogPosts from './BlogPosts';

const Blog = () => (
  <div id='blog'>
    <div className='content-container'>
      <BlogHeader />
      <BlogFilters />
      <BlogPosts />
      <div id='blog-footer'>
        Powered by Redux
      </div>
    </div>
  </div>
)
  
export default Blog;