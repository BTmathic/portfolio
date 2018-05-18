import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';

const DashboardPage = () => (
  <div>
    <Header />
    <div id='dashboard'>
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  </div>
);

export default DashboardPage;

      