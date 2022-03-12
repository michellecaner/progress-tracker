import React from "react"
import "./Project.css"

export const ProjectCard = ({key, project}) => (
    <section className="project">
        <h3 className="project__title">{project.title}</h3>
        <div className="project__description">{project.description}</div>
        <div className="project__category">{project.category}</div>
    </section>
)