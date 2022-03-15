import React from "react"
import "./Project.css"

export const ProjectCard = ({project, handleDeleteProject}) => {
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
              <div className="project__category__type">{project.category.type}</div>
            </div>
              <button type="button" onClick={() => handleDeleteProject(project.id)}>Delete</button>
          </div>
      </div>  
    )
}
