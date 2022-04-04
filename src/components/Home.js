import React, { useState, useEffect } from "react";
import { AffirmationSpotlight } from "../components/affirmation/AffirmationSpotlight"
import { getRandomId } from "../modules/AffirmationManager"
import { PropsAndState } from './PropsAndState'
import "./Home.css"


export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAffirmation= () => {
    getRandomId().then(setSpotlightId);
  };
    
  useEffect(() => {
    refreshSpotlightAffirmation();
  }, []);

  const user = JSON.parse(sessionStorage.project_user).name
  
  return (
    <>
      <div className="home__page">
        <h2>Progress Pal</h2>
        <small>Let your growth be your guide!</small>

        <PropsAndState yourName={user} />

        {
          spotlightId && <AffirmationSpotlight affirmationId={spotlightId} />
        }

        <button onClick={refreshSpotlightAffirmation}>New Affirmation &#x27f3;</button>
      </div>
   </>
  );
}