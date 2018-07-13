import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../routers/AppRouter';

class BlogFilters extends React.Component {
  state = {
    archives: [],
    tags: []
  }

  componentWillMount() {
    let tags = [];
    let archives = [];
    this.props.posts.map((post) => {
      const postTags = post.tags.replace(',', '').split(/\s+/);
      const postDateMonthYear = moment(post.createdAt).format('MMMM YYYY');
      if (archives.indexOf(postDateMonthYear) === -1) {
        archives.push(postDateMonthYear);
      }
      postTags.map((tag) => {
        if (tags.indexOf(tag) === -1) {
          tags.push(tag);
          tags.push(1);
         } else {
           tags[tags.indexOf(tag) + 1] += 1;
         }
      });
    });

    const navTags = [];
    for (let i=0; i < Math.min(5, tags.length/2); i++) {
      const max = Math.max(...tags.map((element) => typeof element === "number" ? element : 0));
      const maxIndex = tags.indexOf(max);
      navTags.push(`${tags[maxIndex-1]} (${tags[maxIndex]})`);
      tags[maxIndex] = 0;
    }
    this.setState(() => ({
      tags: navTags,
      archives
    }));
  }

  render() {
    return (
      <nav>
        <div className='nav-section'>
          <NavLink to="/" activeClassName="is-active" exact={true}>Portfolio</NavLink>
        </div>
        <div className='nav-section'>
          <div className='nav-section-title'>
            Recent Posts
          </div>
          <div className='nav-section-contents'>
            {[1,2,3].map((index) => (
              <div className='nav-section-post'
                key={index}
                onClick={() => {
                  history.push(`/read/${this.props.posts[this.props.posts.length - index].id}`)
                }
              }>
                {this.props.posts[this.props.posts.length - index].title}
              </div>
            ))}
          </div>
        </div>
        <div className='nav-section'>
          <div className='nav-section-title'>
            Tags
          </div>
          <div className='nav-section-contents'>
            {this.state.tags.map((tag) => (
              <div 
                className='nav-section-tag'
                key={tag}
                onClick={() => {
                  history.push(`/tags/${tag.slice(0, tag.indexOf(' '))}`)
                }}
              >
                {tag}
              </div>
            ))}
            {/*<div>All tags</div>*/}
          </div>
        </div>
        <div className='nav-section'>
          <div className='nav-section-title'>
            Archives
          </div>
          {this.state.archives.map((month) => (
            <div
              className='nav-section-archive'
              key={month}
              onClick={() => {
                history.push(`/archives/${month}`)
              }
            }>
              {month}
            </div>
          ))}
        </div>
        <div className='nav-section-contents'>

          {/*<div>Full archives</div>*/}
        </div>
        <div className='nav-section'>
          <div className='nav-section-title'>
            Contact
          </div>
          <div className='nav-section-contents'>
            <div id='blog-contact'>
              <a href='https://github.com/BTmathic'><img src='Images/github-logo.png' alt='GitHub link' className='icon' /></a>
              <a href='https://twitter.com/BrokeTriathlete'><img src='Images/twitter-logo.png' alt='Twitter link' className='icon' /></a>
              <a href='#'><img src='Images/linkedin-logo.png' alt='LinkedIn link' className='icon' /></a>
              <a href='mailto:mathic@gmail.com'><img src='Images/email.png' alt='Email' className='icon' /></a>
            </div>
            <span id='send-message'>
              Send me a message
            </span>
          </div>
        </div>
      </nav>
    );
  };
}

const mapStateToProps = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(BlogFilters);