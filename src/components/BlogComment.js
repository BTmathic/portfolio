import React from 'react';
import { connect } from 'react-redux';
import { startRemoveComment } from '../actions/posts';

const BlogComment = (props) => {
  return (
  <div className='blog-comment'>
    <div className='blog-comment__header'>
      <div className='blog-comment__name'>
        {props.comment.name}
      </div>
      { props.id && 
        <div className='blog-comment__delete'
          onClick={() => { props.startRemoveComment(props.postId, props.comment.id) }}
        >
          Delete
        </div>
      }
    </div>
    <div>
      {props.comment.commentBody}
    </div>
  </div>
);
}

const mapStateToProps = (state) => ({
  id: state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  startRemoveComment: (postId, commentId) => dispatch(startRemoveComment(postId, commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogComment);