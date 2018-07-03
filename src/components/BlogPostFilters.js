// should be needed? Should instead be implicit after clicking on a tag to load the page with that filtration. This can be done with a component?
// <Tag> with a function to dispatch setting a text filter for the tag?

import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const BlogPostFilters = (props) => (
  <div>
    <input type='text' value={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
    }} />
    <select>
      <option></option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(BlogPostFilters)