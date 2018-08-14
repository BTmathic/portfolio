import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import BlogDashboard from './BlogDashboard';

export default class DashboardPage extends React.Component {
  state = {
    atTop: true
  }
  
  handleScroll = () => {
    // if (window.scrollY === 0) {
    //   this.setState(() => ({ atTop: true }));
    // } else if (this.state.top) {
    //   this.setState(() => ({ atTop: false }));
    // }
  }

  componentDidMount() {
    //window.addEventListener('scroll', this.handleScroll);
    if (!!this.props.location.hash) {
      window.scrollTo(0, this[this.props.location.hash.substr(1)].offsetTop + window.innerHeight - 100);
    }
  }

  componentWillUnmount() {
    //window.removeEventListener('scroll', this.handleScroll);
  }
  
  render() {
    return (
      <div>
       <Header atTop={this.state.top} />
        <div id='dashboard'>
          <span ref={node => this['about-me'] = node}>
            <AboutMe />
          </span>
          <span ref = {node => this.projects = node}>
            <Projects />
          </span>
          <span ref={node => this['dashboard-blog'] = node}>
            <BlogDashboard />
          </span>
          <span ref={node => this.contact = node}>
            <Contact />
          </span>
          <div id='footer'>Site created by Alexander Molnar</div>
        </div>
      </div>
    );
  }
}

      