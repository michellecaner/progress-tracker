import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { getAllProjects, getProjectById, deleteProject } from '../../modules/ProjectManager';

export const ProjectList = () => {

  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  const getProjects = () => {
    return getAllProjects().then(projectsFromAPI => {
      setProjects(projectsFromAPI)
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handleDeleteProject = id => {
    deleteProject(id)
    .then(() => getAllProjects().then(setProjects));
};

  return (
    <>
    <section className="section-content">
      <button type="button"
          className="btn"
          onClick={() => {navigate("/projects/create")}}>
          New Project
      </button>
    </section>
      <div className="container-cards">
        {projects.map(project => 
        <ProjectCard 
        key={project.id} 
        project={project}
        handleDeleteProject={handleDeleteProject} />)}
      </div>
    </>
  );
};