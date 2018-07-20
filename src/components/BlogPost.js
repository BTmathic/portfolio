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
          <div id='blog-post-header'>
            <h3>{props.post.title}</h3>
            <div id='back' onClick={() => {history.goBack()}}>
              Back
            </div>
          </div>
          <div className='post-body'
            dangerouslySetInnerHTML={{__html: marked(props.post.postBody, {sanitize: true })}}
          >
          </div>
          <div id='blog-post-footer'>
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
            <div id='blog-post-date'>
              {moment(props.post.createdAt).format('MMMM Do, YYYY')}
            </div>
          </div>
          {
            props.id && <Link to={`/edit/${props.post.id}`}>
              Edit
            </Link>
          }
        </div>
        <div id='blog-post-links'>
          <div>Link to previous post (if...)</div>
          <div>Link to next post (if...)</div>
        </div>
        <div id='blog-comments'>
          Comments (with name)
        </div>
        <div id='blog-leave-comment'>
          <form>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' />
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' />
            <label htmlFor='comment'>Comment</label>
            <textarea></textarea>
            <button type='submit'>Submit</button>
          </form>
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