import React from 'react';
import { Link } from 'react-router-dom';
//import ProjectSection from './ProjectSection';
import projects from '../projects/projects';
//import d3Projects from '../projects/d3Projects';
//import cssProjects from '../projects/cssProjects';
//import reactProjects from '../projects/reactProjects';
//import jqueryProjects from '../projects/jqueryProjects';

class Projects extends React.Component {
  render() {
    return (
      <div id='projects'>
        <div className='content-container'>
          <h1>Projects</h1>
          <div className='projects__content'>
            {
              projects.map((project) => {
                return (
                  <div className='project' key={project.title}>
                    <a href={project.link} target='_blank'>
                      <img src={project.image} alt={project.alt} />
                    </a>
                  </div>
                );
              })
            }
          </div>
          <div className='loader-link'>
            <Link to='/loader'>What was that fun looking loading animation?</Link> (Inspired by <a href='https://codepen.io/SoufianeLasri/pen/XmxRdv'>this</a> pen.)
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;