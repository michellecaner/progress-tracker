import React from "react"
import "./Affirmation.css"

export const AffirmationCard = ({key, affirmation}) => (
    <section className="affirmation">
        <h3 className="affirmation__description">{affirmation.description}</h3>
    </section>
)