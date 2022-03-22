import React from "react";
import "./ProjectItemCard.css"

export const ProjectItemCard = ({ projectItem }) => {
  return (
    <div className="card">
    <div className="card-content">
      <picture>
        <img src={'/images/dog.svg'} alt="Progress Icon" />
      </picture>
      <h3>Progress: <span className="card-progress">
        {projectItem.progress}
      </span></h3>
      <p>{projectItem.dateTime}</p>
    </div>
  </div>
);
}

