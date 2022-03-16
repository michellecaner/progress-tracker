import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { deleteProject, getProjectById } from '../../modules/ProjectManager';
import './ProjectDetail.css';


export const ProjectDetail = () => {
  const [project, setProject] = useState({ description: "", category: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {projectId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getProjectById(id) from ProjectManager and hang on to the data; put it into state
    console.log("useEffect", projectId)
    getProjectById(projectId)
      .then(project => {
        setProject(project);
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
      <h3 className="project__title">{project.title}</h3>
      <div className="project__description">{project.description}</div>
      <div className="project__user">User: {project.user?.name}</div>
      <div className="project__category">Category: {project.category?.type}</div>

      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
      </button>
      
    </section>
  );
}

