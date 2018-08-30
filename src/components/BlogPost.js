import React from 'react';
import moment from 'moment';
import marked from 'marked';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import BlogComments from './BlogComments';
import { history } from '../routers/AppRouter';
import { startEditPost } from '../actions/posts';


class BlogPost extends React.Component {
  makePostVisible = () => {
    this.props.dispatch(startEditPost(this.props.post.id, {visible: true}));
  }
  
  render () {
    return (
      <div className='full-blog-post'>
        <div className='content-container'>
          <div className='blog-post'>
            <header>
              <BlogHeader />
            </header>
            <div className='blog-post__contents'>
              <div className='blog-post__title'>
                <h3>{this.props.post.title}</h3>
                {!this.props.post.visible && 
                  <button onClick={() => {this.makePostVisible()}}>
                    Make visible
                  </button>
                }
              </div>
              <div
                dangerouslySetInnerHTML={{__html: marked(this.props.post.postBody, {sanitize: true })}}
              >
              </div>
              <div className='blog-post__footer'>
                <div>{this.props.post.tags.split(',').map((tag) => 
                  <span
                    key={tag}
                    className='tag'
                    onClick={() => {
                        history.push(`/tags/${tag}`);
                      }
                    }
                  >
                    {tag}
                  </span>
                )}</div>
                <div className='blog-post__date'>
                  {moment(this.props.post.createdAt).format('MMMM Do, YYYY')}
                </div>
              </div>
              {
                this.props.authId && <Link to={`/edit/${this.props.post.id}`}>
                  Edit
                </Link>
              }
            </div>
            <BlogComments postId={this.props.match.params.id} />
          </div>
          <div>
            <footer className='blog__footer'>
              Powered by Redux
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authId: state.auth.uid,
  post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(BlogPost);