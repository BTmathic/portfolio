import React from 'react';
import { connect } from 'react-redux';
import { startAddPost } from '../actions/posts';
import BlogPostForm from './BlogPostForm';

export class AddBlogPost extends React.Component {
  onSubmit = (post) => {
    this.props.startAddPost(post);
    this.props.history.push('/blog');
  };

  render() {
    return (
      <div>
        <h1>Create New Post</h1>
        <BlogPostForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddBlogPost);