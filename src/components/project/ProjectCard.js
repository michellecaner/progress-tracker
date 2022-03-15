import React from "react"
import "./Project.css"

export const ProjectCard = ({key, project}) => {
    return (
    <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/icons8-project-64.png'} alt="Project Icon" />
          </picture>
          <h3><span className="project__title">{project.title}
          </span></h3>
          <div className="project__description">{project.description}</div>
          <div className="project__category">
            <picture>
              <img src={'/images/icons8-category-48.png'} alt="Category Icon" />
            </picture>
            {project.category.type}
          </div>
        </div>
    </div>
    )
  }
