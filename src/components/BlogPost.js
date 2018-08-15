import React from 'react';
import moment from 'moment';
import marked from 'marked';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import BlogComments from './BlogComments';
import { history } from '../routers/AppRouter';

const BlogPost = (props) => (
  <div className='full-blog-post'>
    <div className='content-container'>
      <div className='blog-post'>
        <header>
          <BlogHeader />
        </header>
        <div className='blog-post__contents'>
          <div>
            <h3>{props.post.title}</h3>
          </div>
          <div
            dangerouslySetInnerHTML={{__html: marked(props.post.postBody, {sanitize: true })}}
          >
          </div>
          <div className='blog-post__footer'>
            <div>{props.post.tags.split(',').map((tag) => 
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
              {moment(props.post.createdAt).format('MMMM Do, YYYY')}
            </div>
          </div>
          {
            props.id && <Link to={`/edit/${props.post.id}`}>
              Edit
            </Link>
          }
        </div>
        <BlogComments postId={props.match.params.id} />
      </div>
      <div>
        <footer className='blog__footer'>
          Powered by Redux
        </footer>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    id: state.auth.uid,
    post: state.posts.find((post) => post.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(BlogPost);