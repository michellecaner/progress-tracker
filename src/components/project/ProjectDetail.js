import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { deleteProject, getProjectById } from '../../modules/ProjectManager';
import { ProjectItemForm } from './ProjectItemForm';
import './ProjectDetail.css';
import './ProjectItemForm.css';


export const ProjectDetail = () => {
  const [project, setProject] = useState({ description: "", category: "" });
  const [isLoading, setIsLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);

  const {projectId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getProjectById(id) from ProjectManager and hang on to the data; put it into state
    console.log("useEffect", projectId)
    getProjectById(projectId)
      .then(project => {
        setProject(project);
        setIsLoading(false)
      });
  }, [projectId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteProject(projectId).then(() =>
      navigate("/projects")
    );
  };

  return (
    <section className="project">
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

      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
      </button>
      
      <button onClick={ () => showForm === true ? setShowForm(false) : setShowForm(true) }>
        Add Progress
      </button>

      { showForm === true && (
        <ProjectItemForm
        key={project.id} 
        projectId={projectId} />)
      }

    </section>
  );
}

