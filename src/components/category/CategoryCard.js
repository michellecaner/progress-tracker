import React from "react"
import "./Category.css"

export const CategoryCard = ({key, category}) => {
        return (
        <div className="card">
            <div className="card-content">
              <picture>
                <img src={'/images/icons8-category-48.png'} alt="Category Icon" />
              </picture>
              <h3><span className="category__title">{category.type}
              </span></h3>
            </div>
        </div>
        )
      }
