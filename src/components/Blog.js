import React from 'react';
import BlogPosts from './BlogPosts';
import BlogHeader from './BlogHeader';
import BlogFilters from './BlogFilters';

export default class Blog extends React.Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  }

  componentDidMount() {
    if (window.innerWidth > 768) {
      this.setState(() => ({ menuOpen: true }));
    }
  }

  render() {
    return (
      <div className='blog'>
        <div className='content-container'>
          <div className='blog-page'>
            <header>
              <BlogHeader toggleMenu={this.toggleMenu} />
            </header>
            <div className='blog-page__contents'>
              {this.state.menuOpen && <BlogFilters />}
              <BlogPosts tag={this.props.tag} month={this.props.month} />
            </div>
          </div>
          <footer>
            Powered by Redux
          </footer>
        </div>
      </div>
    );
  }
}