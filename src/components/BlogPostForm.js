import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import BlogPostPreview from './BlogPostPreview';

export default class BlogPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title : '',
      postBody: props.post ? props.post.postBody: '',
      tags: props.post ? props.post.tags : '',
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      calendarFocused: false,
      formError: ''
    }
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onPostChange = (e) => {
    const postBody = e.target.value;
    this.setState(() => ({ postBody }));
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  onTagsChange = (e) => {
    const tags = e.target.value;
    this.setState(() => ({ tags }));
  }

  onFocusChange = () => {
    this.setState((prevState) => ({ calendarFocused: !prevState.calendarFocused }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.postBody) {
      this.setState(() => ({
        formError: 'A title and post body is required'
      }));
    } else {
      this.setState(() => ({ formError: '' }));
      this.props.onSubmit({
        title: this.state.title,
        postBody: this.state.postBody,
        tags: this.state.tags,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  }

  render() {
    return (
      <div>
      {this.state.formError && <p>{this.state.formError}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Title'
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            type='text'
            placeholder='Post'
            value={this.state.postBody}
            onChange={this.onPostChange}
          ></textarea>
          <input
            type='text'
            placeholder='Tags'
            value={this.state.tags}
            onChange={this.onTagsChange}
          />
          <button>{!!this.props.post ? 'Submit Edit' : 'Create Post'}</button>
        </form>
        <BlogPostPreview postBody={this.state.postBody} />
      </div>
    );
  }
}