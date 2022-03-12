import React from "react"
import "./Category.css"

export const CategoryCard = ({key, category}) => (
    <section className="category">
        <h3 className="category__type">{category.type}</h3>
    </section>
)
