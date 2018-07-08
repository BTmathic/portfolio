import React from 'react';
import marked from 'marked';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogDashboard = (props) => (
  <div id='dashboard-blog'>
    <div className='content-container'>
      <h1>Blog</h1>
      <h2>{props.post.title}</h2>
      <div id='blog-snippet'>
        <div dangerouslySetInnerHTML={{ __html: marked(props.post.postBody.slice(0, 200), { sanitize: true }) }}></div><span>...</span>
      </div>
      <div id='link-to-blog'>
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