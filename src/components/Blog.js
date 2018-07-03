import React from 'react';
import BlogFilters from './BlogFilters';
import BlogHeader from './BlogHeader';
import BlogPosts from './BlogPosts';

const Blog = () => (
  <div id='blog'>
    <BlogHeader />
    <BlogFilters />
    <BlogPosts />
  </div>
)
  
export default Blog;