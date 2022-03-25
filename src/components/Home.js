import React, { useState, useEffect } from "react";
import { AffirmationSpotlight } from "../components/affirmation/AffirmationSpotlight"
import { getRandomId } from "../modules/AffirmationManager"


import { PropsAndState } from './PropsAndState'

export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);

    const refreshSpotlightAffirmation= () => {
        getRandomId().then(setSpotlightId);
      };
    
      useEffect(() => {
        refreshSpotlightAffirmation();
      }, []);

      return (
        <>
            <h2>Progress Tracker</h2>
            <small>Every bit counts!</small>

            <PropsAndState yourName={"Brenda"} />

            <button onClick={refreshSpotlightAffirmation}>Reload &#x27f3;</button>
            {spotlightId && <AffirmationSpotlight affirmationId={spotlightId} />
            }
        </>
      );
}