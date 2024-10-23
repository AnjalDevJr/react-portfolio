import React from 'react'
import './Projects.css'
import projects from '../../assets/projects_data.js'

const Projects = () => {
  return (
    <div className='projects' id='project'>
      <h1>My Projects</h1>
      <div className="projects-container">
        <ul>
          {projects.map((project,index) => {
            return(
              <li className='project' key={index}>
                <img className='images' src={project.image} alt="" />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="show-details">
        <h3>Show More</h3>
        <i class='bx bx-right-arrow-alt'></i>
      </div>
    </div>
  )
}

export default Projects