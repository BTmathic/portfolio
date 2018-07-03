import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';
import BlogPostForm from './BlogPostForm';

const AddBlogPost = (props) => (
  <div>
    <h1>New Post</h1>
    <BlogPostForm
      onSubmit={(post) => {
        props.dispatch(addPost(post));
        props.history.push('/blog');
      }}
    />
  </div>
);

export default connect()(AddBlogPost);