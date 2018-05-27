import React from 'react';
import ProjectSection from './ProjectSection';
import d3Projects from '../projects/d3Projects';
import cssProjects from '../projects/cssProjects';
import reactProjects from '../projects/reactProjects';
import jqueryProjects from '../projects/jqueryProjects';

const Projects = () => (
  <div>
    <div className='section-wrapper'></div>
    <div id='projects' className='content-container'>
      <h1>Projects</h1>
      <ProjectSection projects={reactProjects} />
      <ProjectSection projects={jqueryProjects} />
      <ProjectSection projects={d3Projects} />
      <ProjectSection projects={cssProjects} />
    </div>
  </div>
);

export default Projects;