import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { getAllProjects, getProjectById } from '../../modules/ProjectManager';

export const ProjectList = () => {

  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    return getAllProjects().then(projectsFromAPI => {
      setProjects(projectsFromAPI)
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="container-cards">
      {projects.map(project => <ProjectCard key={project.id} project={project} />)}
    </div>
  );
};