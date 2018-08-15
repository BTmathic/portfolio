// No longer needed with new design, but may as well keep this just in case

import React from 'react';

export default class ProjectSection extends React.Component {
  state = {
    displayProject: 0,
    sectionToggledOpen: !!this.props.projectsOpen
  }

  handleLeftClick = () => {
    const currentProject = this.state.displayProject;
    const displayProject = currentProject === 0 ? this.props.projects[1].length-1 : currentProject - 1;
    this.setState(() => ({ displayProject }));
  }

  handleRightClick = () => {
    const currentProject = this.state.displayProject;
    const displayProject = currentProject === this.props.projects[1].length - 1 ? 0 : currentProject + 1;
    this.setState(() => ({ displayProject }));
  }

  handleToggleProjectSection = () => {
    this.setState((prevState) => ({ sectionToggledOpen: !prevState.sectionToggledOpen }));
  }

  render() {
    return (
      <div>
        <div className='project-section'>
          <h2 className='projects-bar' onClick={this.handleToggleProjectSection}>
            {this.props.projects[0]}
          </h2>
          { this.state.sectionToggledOpen && 
            <div className='project-carousel'>
              <div className='left-arrow' onClick={this.handleLeftClick}>
                &#10094;
              </div>
                <div className='project'>
                  <h3 className='project-title'>
                    {this.props.projects[1][this.state.displayProject].title}
                  </h3>
                  <div className='project-image'>
                    <a href={this.props.projects[1][this.state.displayProject].link} target="_blank">
                      <img src={this.props.projects[1][this.state.displayProject].image}
                        alt={this.props.projects[1][this.state.displayProject].alt}
                      />
                    </a>
                  </div>
                  <div className='project-tools'>
                    Additional tools used: {this.props.projects[1][this.state.displayProject].tools}
                  </div>
                </div>
                <div className='right-arrow' onClick={this.handleRightClick}>
                  &#10095;
              </div>
            </div>
          }
          <div className='project-indicator'>
            <span className='dot'></span>
          </div>
        </div>
      </div>
    );
  }
};