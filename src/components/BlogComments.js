import React from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';
import BlogComment from './BlogComment';
import { startAddComment, removeComment } from '../actions/posts';

class BlogComments extends React.Component {
  handleComments = () => {
    const commentsObject = this.props.post[0].comments;
    let comments = [];
    for (let key in commentsObject) {
      if (commentsObject.hasOwnProperty(key)) {
        comments.push(<BlogComment key={key} commentId={key} postId={this.props.postId} comment={commentsObject[key]} />);
      }
    }
    return comments;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      name: e.target.name.value,
      email: e.target.email.value,
      commentBody: e.target.comment.value
    }
    this.props.startAddComment(this.props.postId, comment);
    history.push(`/read/${this.props.postId}`);
  }

  render() {
    return (
      <div>
        <div id='blog-post-links'>
          <div>Link to previous post (if...)</div>
          <div>Link to next post (if...)</div>
        </div>
        <div id='blog-comments'>
          { this.handleComments() }
        </div>
        <div id='blog-leave-comment'>
          <h2>Leave a comment</h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' required/>
            <label htmlFor='email'>Email (your email will not be published)</label>
            <input type='email' name='email' required/>
            <label htmlFor='comment'>Comment</label>
            <textarea name='comment'></textarea>
            <button type='submit'>Post Comment</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.filter((post) => post.id === props.postId)
});

const mapDispatchToProps = (dispatch) => ({
  startAddComment: (id, comment) => dispatch(startAddComment(id, comment)),
  removeComment: () => dispatch(removeComment())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogComments);