import React from 'react';
import { connect } from 'react-redux';
import BlogPost from './BlogPost';
import selectPosts from '../selectors/posts.js';

const BlogPosts = (props) => (
  <div>
      {
        props.posts.length === 0 ? (
          <div>No posts to display</div>
        ) : (
            props.posts.map((post) => {
              return <BlogPost key={post.id} {...post} />;
            })
          )
      }
  </div>
);

const mapStateToProps = (state) => {
  return {
    posts: selectPosts(state.posts, state.filters)
  };
};

export default connect(mapStateToProps)(BlogPosts);