import React from 'react';
import marked from 'marked';

export default class BlogPostPreview extends React.Component {
  state = {
    textToMarkup: this.props.postBody
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.textToMarkup !== nextProps.textToMarkup) {
      this.setState(() => ({ textToMarkup: nextProps.postBody }));
    }
  }

  render() {
    return (
      <div>
        <div className='content-container' dangerouslySetInnerHTML={{__html: marked(this.state.textToMarkup, { sanitize: true })}}></div>
      </div>
    );
  }
}