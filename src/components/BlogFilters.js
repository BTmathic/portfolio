import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../routers/AppRouter';

class BlogFilters extends React.Component {
  state = {
    tags: [],
    archives: []
  }
  componentWillMount() {
    // go through dates, latest date, check previous 5 non-empty, all that exist go in archives section

    // both sections have a link to full list of tags/archives
    let tags = [];
    this.props.posts.map((post) => {
      const nextTags = post.tags.replace(',', '').split(/\s+/);
      nextTags.map((tag) => {
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
      archives: moment(this.props.posts[this.props.posts.length-1].createdAt).format('MMMM YYYY')
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
            <div>List of 5 most recent titles</div>
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
            <div>All tags</div>
          </div>
        </div>
        <div className='nav-section'>
          <div className='nav-section-title'>
            Archives
          </div>
          <div className='nav-section-contents'>
            {this.state.archives}
            <div>Full archives</div>
          </div>
        </div>
        <div className='nav-section'>
          <div className='nav-section-title'>
            Contact
          </div>
          <div className='nav-section-contents'>
            Social media buttons
            Small contact form, maybe popup into a larger modal with name, email and comment
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