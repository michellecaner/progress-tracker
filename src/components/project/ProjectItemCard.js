import React from "react";
import "./ProjectItemCard.css"

export const ProjectItemCard = ({ projectItems }) => {
  return (
    <div className="card">
    <div className="card-content">
      <picture>
        <img src={'/images/icons8-star-64.png'} alt="Progress Icon" />
      </picture>
      <h3>Progress: <span className="card-progress">
        {projectItems.progress}
      </span></h3>
      <p>{projectItems.dateTime}</p>
    </div>
  </div>
);
}

