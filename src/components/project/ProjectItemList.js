import React, { useEffect } from 'react';
import { getAllProjectItems, getProjectItemById } from '../../modules/ProjectManager';
import { ProjectItemCard } from './ProjectItemCard';


export const ProjectItemList = () => {
  const getProjectItems = () => {
    return getAllProjectItems().then(projectItemsFromAPI => {
      console.log(projectItemsFromAPI);
    });
  };

  useEffect(() => {
    getProjectItems();
  }, []);

  return (
    <div className="container-cards">
      <ProjectItemCard />
    </div>
  );
};