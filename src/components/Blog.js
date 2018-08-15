import React from 'react';
import BlogPosts from './BlogPosts';
import BlogHeader from './BlogHeader';
import BlogFilters from './BlogFilters';

const Blog = (props) => (
  <div className='blog'>
    <div className='content-container'>
      <div className='blog-page'>
        <header>
          <BlogHeader />
        </header>
        <div className='blog-page__contents'>
          <BlogFilters />
          <BlogPosts tag={props.tag} month={props.month} />
        </div>
      </div>
      <footer>
        Powered by Redux
      </footer>
    </div>
  </div>
)
  
export default Blog;