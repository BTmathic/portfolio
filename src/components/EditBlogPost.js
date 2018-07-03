import React from 'react';
import { connect } from 'react-redux';

import BlogPostForm from './BlogPostForm';
import { editPost, removePost } from '../actions/posts';

const EditBlogPost = (props) => (
  <div>
    <BlogPostForm
      post={props.post}
      onSubmit={(post) => {
        props.dispatch(editPost(props.post.id, post))
        props.history.push('/blog');
      }}
    />
    <button onClick={() => {
      const id = props.post.id
      props.dispatch(removePost({ id }));
      props.history.push('/blog');
    }}>Remove</button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => post.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditBlogPost);