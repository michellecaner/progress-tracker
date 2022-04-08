import React from "react"
import { Link } from "react-router-dom";
import "./Project.css"

export const ProjectCard = ({project, handleDeleteProject}) => {
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              <img src={'/images/icons8-project-64.png'} alt="Project Icon" />
            </picture>
            <h3><span className="project-title">{project.title}
            </span></h3>
            <Link to={`/projects/${project.id}`}>
              <button>Details</button>
            </Link>
            <button type="button" onClick={() => handleDeleteProject(project.id)}>Delete</button>
          </div>
      </div>  
    )
}
