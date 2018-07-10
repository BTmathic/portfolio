import React from 'react';
import { connect } from 'react-redux';
import BlogSnippet from './BlogSnippet';
import selectPosts from '../selectors/posts.js';
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters';

class BlogPosts extends React.Component {

  componentWillMount() {
    this.props.setTextFilter(this.props.tag);
  }

  componentWillUnmount() {
    this.props.setTextFilter('');
  }

  render() {
    return (
      <div>
        {
          this.props.posts.length === 0 ? (
            <div>No posts to display</div>
          ) : (
              this.props.posts.map((post) => {
                return <BlogSnippet key={post.id} post={post} />
              })
            )
        }
      </div>
    );
  };
}

const mapStateToProps = (state, props) => {
  return {
    posts: selectPosts(state.posts, state.filters)
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (date) => dispatch(setStartDate(date)),
  setEndDate: (date) => dispatch(setEndDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPosts);