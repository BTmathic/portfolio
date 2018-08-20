import React from 'react';
import { connect } from 'react-redux';
import BlogComment from './BlogComment';
import { history } from '../routers/AppRouter';
import { startAddComment, removeComment } from '../actions/posts';

class BlogComments extends React.Component {
  state = {
    name: '',
    email: '',
    comment: ''
  }

  goToPost = (direction) => {
    let currentPost;
    this.props.posts.map((post, index) => {
      if (post.id === this.props.postId) {
        currentPost = index;
      }
    });
    const nextPost = currentPost + direction;
    if (nextPost > -1 && nextPost < this.props.posts.length) {
      history.push(`/read/${this.props.posts[nextPost].id}`);
      window.scrollTo(0, 0);
    }
  }

  handleComments = () => {
    const commentsObject = this.props.post[0].comments;
    let comments = [];
    for (let key in commentsObject) {
      if (commentsObject.hasOwnProperty(key)) {
        comments.push(
          <BlogComment
            key={key}
            commentId={this.props.post[0].id}
            postId={this.props.postId}
            comment={commentsObject[key]}
          />
        );
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
    this.setState(() => ({
      name: '',
      email: '',
      comment: ''
    }))
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }
  
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }
  
  onCommentChange = (e) => {
    const comment = e.target.value;
    this.setState(() => ({ comment }));
  }

  render() {
    return (
      <div>
        <div className='blog-post__links'>
          <div className={this.props.postId === this.props.posts[0].id ? 'no-post' : 'blog-post-move'} onClick={() => {this.goToPost(-1)}}>
            Previous post
          </div>
          <div></div>
          <div className={this.props.postId === this.props.posts[this.props.posts.length - 1].id ? 'no-post' : 'blog-post-move'} onClick={() => {this.goToPost(1)}}>
            Next post
          </div>
        </div>
        <div className='blog-post__comments'>
          { this.handleComments() }
        </div>
        <div className='blog-post__leave-comment'>
          <h2>Leave a comment</h2>
          <form onSubmit={(e) => { this.handleSubmit(e); }}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.onNameChange}
              required
            />
            <label htmlFor='email'>Email (your email will not be published)</label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.onEmailChange}
              required
            />
            <label htmlFor='comment'>Comment</label>
            <textarea
              name='comment'
              value={this.state.comment}
              onChange={this.onCommentChange}
            ></textarea>
            <button type='submit'>Post Comment</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  post: state.posts.filter((post) => post.id === props.postId)
});

const mapDispatchToProps = (dispatch) => ({
  startAddComment: (id, comment) => dispatch(startAddComment(id, comment)),
  removeComment: () => dispatch(removeComment())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogComments);