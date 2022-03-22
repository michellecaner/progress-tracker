import React, { useEffect, useState } from 'react';
import { ProjectItemCard } from './ProjectItemCard';


export const ProjectItemList = ({projectItems}) => {

  return (
    <div className="container-cards">
       {projectItems.map(projectItem => 
        <ProjectItemCard 
        key={projectItem.id}
        projectItem={projectItem} />
      )}
    </div>
  );
};