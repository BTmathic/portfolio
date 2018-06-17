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
    if (window.scrollY === 0) {
      this.setState(() => ({ atTop: true }));
    } else if (this.state.top) {
      this.setState(() => ({ atTop: false }));
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  render() {
    return (
      <div>
       <Header atTop={this.state.top} />
        <div id='dashboard'>
          <AboutMe />
          <Projects />
          <BlogDashboard />
          <Contact />
          <div id='footer'>Site created by Alexander Molnar (me!)</div>
        </div>
      </div>
    );
  }
}

      