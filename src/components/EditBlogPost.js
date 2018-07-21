import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import BlogPostForm from './BlogPostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

class EditBlogPost extends React.Component {
  state = {
    modalIsOpen: false
  }

  handleRemove = () => {
    this.props.dispatch(startRemovePost({ id: this.props.post.id }));
    this.props.history.push('/blog');
  }

  toggleModal = () => {
    this.setState((prevState) => ({ modalIsOpen: !prevState.modalIsOpen }));
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    return (
      <div>
        <BlogPostForm
          post={this.props.post}
          onSubmit={(post) => {
            this.props.dispatch(startEditPost(this.props.post.id, post))
            this.props.history.push('/blog');
          }}
        />
        <button onClick={() => {this.toggleModal()}}>Remove</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          contentLabel={'Confirm delete post'}
        >
          Are you sure you want to delete this post?
          <button onClick={() => {this.handleRemove()}}>Delete</button>
          <button onClick={() => {this.toggleModal()}}>Cancel</button>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
  });

export default connect(mapStateToProps)(EditBlogPost);