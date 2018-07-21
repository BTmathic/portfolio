import React from 'react';
import { connect } from 'react-redux';
import { startRemoveComment } from '../actions/posts';

const BlogComment = ({comment, postId, commentId, startRemoveComment }) => {
  return (
  <div className='blog-comment'>
    <div className='blog-comment-header'>
      <div className='blog-comment-name'>
        {comment.name}
      </div>
      <div className='blog-comment-delete'
        onClick={() => { startRemoveComment(postId, { commentId }) }}
      >
        Delete
      </div>
    </div>
    <div className='blog-comment-body'>
      {comment.commentBody}
    </div>
  </div>
);
}

const mapDispatchToProps = (dispatch) => ({
  startRemoveComment: (postId, commentId) => dispatch(startRemoveComment(postId, commentId))
});

export default connect(undefined, mapDispatchToProps)(BlogComment);