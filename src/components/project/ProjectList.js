import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { getAllProjects, getProjectById, deleteProject } from '../../modules/ProjectManager';
import { getProjectsByCategory } from '../../modules/CategoryManager';

export const ProjectList = () => {

  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  const {categoryId} = useParams();

  const getProjects = () => {
    if (categoryId) {
      return getProjectsByCategory(parseInt(categoryId)).then(projectsFromAPI => {
        setProjects(projectsFromAPI)
      })
    } else {
      return getAllProjects().then(projectsFromAPI => {
        setProjects(projectsFromAPI)
      });
    }
   
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