import React from 'react';
import moment from 'moment';
import marked from 'marked';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import { history } from '../routers/AppRouter';

const BlogPost = (props) => (
  <div className='blog-full-post'>
    <div className='content-container'>
      <div id='blog-page'>
        <header>
          <BlogHeader />
        </header>
        <div className='blog-post'>
          <h3>{props.post.title}</h3>
          <div id='back'>Back</div>
          <div className='post-body'
            dangerouslySetInnerHTML={{__html: marked(props.post.postBody, {sanitize: true })}}
          >
          </div>
          { 
            props.id && <Link to={`/edit/${props.post.id}`}>
              Edit
            </Link>
          }
          
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
          <div>{moment(props.post.createdAt).format('MMMM Do, YYYY')}</div>
        </div>
      </div>
      <div>
        <footer id='blog-footer'>
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