import React, { useState, useEffect } from 'react';
import { AffirmationCard } from './AffirmationCard';
import { getAllAffirmations, getAffirmationById } from '../../modules/AffirmationManager';

export const AffirmationList = () => {

  const [affirmations, setAffirmations] = useState([]);

  const getAffirmations = () => {
    return getAllAffirmations().then(affirmationsFromAPI => {
      setAffirmations(affirmationsFromAPI)
    });
  };

  useEffect(() => {
    getAffirmations();
  }, []);

  return (
    <div className="container-cards">
      {affirmations.map(affirmation => <AffirmationCard key={affirmation.id} affirmation={affirmation} />)}
    </div>
  );
};