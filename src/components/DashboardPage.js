import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import OpenSource from './OpenSource';
import BlogDashboard from './BlogDashboard';

export default class DashboardPage extends React.Component {
  componentDidMount() {
    if (!!this.props.location.hash && this.props.location.hash !== '#top') {
      window.scrollTo(0, this[this.props.location.hash.substr(1)].offsetTop + window.innerHeight - 100);
    }
  }
  
  render() {
    return (
      <div>
       <Header />
        <div className='dashboard'>
          <span ref={node => this['about-me'] = node}>
            <AboutMe />
          </span>
          <span ref = {node => this.projects = node}>
            <Projects />
          </span>
          <OpenSource />
          <span ref={node => this['dashboard-blog'] = node}>
            <BlogDashboard />
          </span>
          <span ref={node => this.contact = node}>
            <Contact />
          </span>
          <div className='footer'>Site created by Alexander Molnar</div>
        </div>
      </div>
    );
  }
}

      