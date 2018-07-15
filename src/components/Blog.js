import React from 'react';
import BlogPosts from './BlogPosts';
import BlogHeader from './BlogHeader';
import BlogFilters from './BlogFilters';

const Blog = (props) => (
  <div className='blog'>
    <div className='content-container'>
      <div id='blog-page'>
        <header>
          <BlogHeader />
        </header>
        <div className='blog-contents'>
          <BlogFilters />
          <BlogPosts tag={props.tag} month={props.month} />
        </div>
      </div>
      <footer id='blog-footer'>
        Powered by Redux
      </footer>
    </div>
  </div>
)
  
export default Blog;