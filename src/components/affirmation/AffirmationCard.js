import React from "react"
import "./Affirmation.css"

export const AffirmationCard = ({key, affirmation}) => {
    return (
    <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/icons8-heart-64.png'} alt="Affirmation Icon" />
          </picture>
          <h3><span className="affirmation__description">{affirmation.description}
          </span></h3>
        </div>
    </div>
  )
}
