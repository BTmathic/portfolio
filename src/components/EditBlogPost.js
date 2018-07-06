import React from 'react';
import { connect } from 'react-redux';

import BlogPostForm from './BlogPostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

const EditBlogPost = (props) => (
  <div>
    <BlogPostForm
      post={props.post}
      onSubmit={(post) => {
        props.dispatch(startEditPost(props.post.id, post))
        props.history.push('/blog');
      }}
    />
    <button onClick={() => {
      props.dispatch(startRemovePost({ id: props.post.id }));
      props.history.push('/blog');
      // add modal check before deleting
    }}>Remove</button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => post.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditBlogPost);