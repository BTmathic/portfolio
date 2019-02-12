import React from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';

const githubLogo = require('../../public/Images/github-logo.png');
const codepenLogo = require('../../public/Images/codepen-logo.png');
const linkedInLogo = require('../../public/Images/linkedin-logo.png');
const emailImage = require('../../public/Images/email.png');

class BlogFilters extends React.Component {
  state = {
    archives: [],
    tags: [],
    modalIsOpen: false,
    formSent: '',
    name: '',
    email: '',
    message: ''
  }

  toggleModal = () => {
    this.setState((prevState) => ({ modalIsOpen: !prevState.modalIsOpen }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('/contact', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })
    /*
    .then((response) => {
      this.toggleModal();
      //return response.json();
    })
    .then((json) => {
      this.toggleModal()
    })
    .catch((err) => {
      this.toggleModal()
      //console.error(err);
    });
    */
    this.toggleModal()
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }

  onMessageChange = (e) => {
    const message = e.target.value;
    this.setState(() => ({ message }));
  }

  componentWillMount() {
    Modal.setAppElement('body');
    let tags = [];
    let archives = [];
    this.props.posts.map((post) => {
      if (post.visible) {
        const postTags = post.tags.replace(',', '').split(/\s+/);
        const postDateMonthYear = moment(post.createdAt).format('MMMM YYYY');
        if (archives.indexOf(postDateMonthYear) === -1) {
          archives.unshift(postDateMonthYear);
        }
        postTags.map((tag) => {
          if (tags.indexOf(tag) === -1) {
            tags.push(tag);
            tags.push(1);
          } else {
            tags[tags.indexOf(tag) + 1] += 1;
          }
        });
      }
    });

    const navTags = [];
    for (let i=0; i < 5; i++) {
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
    const visiblePosts = this.props.posts.filter((post) => post.visible);
    return (
      <div id={this.props.menuOpen ? 'nav-menu' : null} className='mobile-nav-menu'>
        <nav>
          <div className='nav-section'>
            <div className='nav-section__title'>
              Recent Posts
            </div>
            <div>
              {[1,2,3,4,5].map((index) => (
                <div className='nav-section__post'
                  key={index}
                  onClick={() => {
                    history.push(`/read/${this.props.posts[this.props.posts.length - index].id}`)
                  }
                }>
                  {visiblePosts[visiblePosts.length - index].title}
                </div>
              ))}
            </div>
          </div>
          <div className='nav-section'>
            <div className='nav-section__title'>
              Tags
            </div>
            <div>
              {this.state.tags.map((tag) => (
                <div 
                  className='nav-section__tag'
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
            <div className='nav-section__title'>
              Archives
            </div>
            {this.state.archives.map((month) => (
              <div
                className='nav-section__archive'
                key={month}
                onClick={() => {
                  history.push(`/archives/${month}`)
                }
              }>
                {month}
              </div>
            ))}
          </div>
          {/*<div>Full archives</div>*/}
          <div className='nav-section'>
            <div className='nav-section__title'>
              Contact
            </div>
            <div>
              <div className='blog-contact'>
                <div className='blog-contact__row'>
                  <a href='https://github.com/BTmathic'><img src={githubLogo} alt='GitHub link' className='icon' /></a>
                  <a href='https://codepen.io/brokentriathlete/'><img src={codepenLogo} alt='Codepen logo' className='icon' /></a>
                  {/*<a href='https://twitter.com/BrokeTriathlete'><img src='Images/twitter-logo.png' alt='Twitter link' className='icon' /></a>*/}
                </div>
                <div className='blog-contact__row'>
                  <a href='#'><img src={linkedInLogo} alt='LinkedIn link' className='icon' /></a>
                  <a href='mailto:mathic@gmail.com'><img src={emailImage} alt='Email' className='icon' /></a>
                </div>
              </div>
              {
              <div id='send-message-container'>
                <div id='send-message' onClick={() => {this.toggleModal()}}>
                  Send me a message
                </div>
                <Modal
                  className='message-modal'
                  closeTimeoutMS={200}
                  contentLabel={'Send me a message'}
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.toggleModal}
                >
                  <h2 id='message-modal__title'>
                    Send me a message
                  </h2>
                  <form onSubmit={(e) => {this.handleSubmit(e);}}>
                    What can I call you?
                    <div id='message-name'>
                      <input
                        type='text'
                        name='name'
                        onChange={this.onNameChange}
                        placeholder='Name'
                        value={this.state.name}
                        required 
                      />
                    </div>
                    Where should I respond?
                    <div id='message-email'>
                      <input
                        type='text'
                        name='email'
                        onChange={this.onEmailChange}
                        placeholder='Email'
                        value={this.state.email}
                        required
                      />
                    </div>
                    What would you like?
                    <div id='message'> 
                      <textarea
                        name='message'
                        onChange={this.onMessageChange}
                        placeholder={'Write your message here...'}
                        value={this.state.message}
                      >
                      </textarea>
                    </div>
                    <div id='message-modal__buttons'>
                      <button type='submit'>Send</button>
                      <button onClick={() => { this.toggleModal() }}>Cancel</button>
                    </div>
                  </form>
                </Modal>
              </div>
              }
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  menuOpen: state.menu
});

export default connect(mapStateToProps)(BlogFilters);