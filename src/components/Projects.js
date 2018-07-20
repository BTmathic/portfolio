import React from 'react';
import { Link } from 'react-router-dom';
import ProjectSection from './ProjectSection';
import d3Projects from '../projects/d3Projects';
import cssProjects from '../projects/cssProjects';
import reactProjects from '../projects/reactProjects';
import jqueryProjects from '../projects/jqueryProjects';

const Projects = () => (
  <div id='projects'>
    <div className='content-container'>
      <h1>Projects</h1>
      <ProjectSection projects={reactProjects} projectsOpen={true} />
      <ProjectSection projects={jqueryProjects} />
      <ProjectSection projects={d3Projects} />
      <ProjectSection projects={cssProjects} />
      <div id='loader-link'>
        <Link to='/loader'>What was that beautiful loading animation?</Link>
      </div>
    </div>
  </div>
);

export default Projects;