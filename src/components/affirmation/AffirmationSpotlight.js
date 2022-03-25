import React, { useState, useEffect } from "react";
import { getAffirmationById } from "../../modules/AffirmationManager";
import "./AffirmationSpotlight.css";

export const AffirmationSpotlight = ({affirmationId}) => {

  const [affirmation, setAffirmation] = useState({});

  useEffect(() => {
    getAffirmationById(affirmationId).then(affirmation => {
      setAffirmation(affirmation);
    });
  }, [affirmationId]);

  return (
    <div className="affirmation-spotlight">
      {/* <img src={require('/images/icons8-heart-64.png')} alt="My Affirmation" /> */}
      <div>
        <h3>{affirmation.desciption}</h3>
      </div>
    </div>
  );
};
