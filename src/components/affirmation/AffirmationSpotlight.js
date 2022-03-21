import React, { useState, useEffect } from "react";
import { getAffirmationById } from "../../modules/AffirmationManager";
import "./AffirmationSpotlight.css";

export const AffirmationSpotlight = ({affirmationId}) => {
  const [affirmation, setAffirmation] = useState({});

  useEffect(() => {
    getAffirmationById(affirmationId).then(affirmation => {
      setAffirmation(affirmation);
    });
  }, []);

  return (
    <div className="animal-spotlight">
      {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};
