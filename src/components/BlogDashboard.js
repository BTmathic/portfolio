import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogSnippet from './BlogSnippet';

const BlogDashboard = (props) => (
  <div id='dashboard-blog'>
    <div className='content-container'>
      <h1>Blog</h1>
      <BlogSnippet post={props.post} />
      <div className='link-to-blog'>
        <Link to='/blog' onClick={() => window.scrollTo(0,0)}>More Blog Posts...</Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    post : state.posts[state.posts.length - 1]
  }
}

export default connect(mapStateToProps)(BlogDashboard);