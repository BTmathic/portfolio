import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import BlogSnippet from './BlogSnippet';
import selectPosts from '../selectors/posts.js';
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters';

class BlogPosts extends React.Component {
  state = {
    tag: this.props.tag,
    month: this.props.month
  }

  handleArchiveDates = (month, year) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (this.state.month) {
      [month, year] = this.state.month.split(' ');
      if (moment([year, months.indexOf(month), 1]).isSameOrAfter(this.props.filters.endDate) ||
        moment([year, months.indexOf(month), 2]).isSameOrBefore(this.props.filters.startDate)
        ) {
        this.props.setStartDate(moment([year, months.indexOf(month)].valueOf()));
        this.props.setEndDate(moment([year, months.indexOf(month) + 1].valueOf()));
      }
    }
  }
  
  componentWillMount() {
    this.props.setTextFilter(this.state.tag);
    if (this.state.month) {
      this.handleArchiveDates();
    }
  }

  componentDidUpdate() {
    if (this.props.tag === this.state.tag) {
      if (this.props.tag && (this.props.filters.text !== this.props.tag)) {
        this.props.setTextFilter(this.props.tag);
      }
    } else {
      this.setState(() => ({ tag: this.props.tag }));
    }

    if (this.props.month === this.state.month) {
      if (this.props.month) {
        this.handleArchiveDates();
      } else if (this.props.filters.startDate) {
        this.props.setStartDate(undefined);
        if (this.props.filters.endDate) {
          this.props.setEndDate(undefined);
        }
      }
    } else {
      if (this.props.month) {
        this.setState(() => ({ month: this.props.month }));
      }
    }
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

const mapStateToProps = (state) => ({
  posts: selectPosts(state.posts, state.filters),
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (date) => dispatch(setStartDate(date)),
  setEndDate: (date) => dispatch(setEndDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPosts);