import React from "react"
import { Link } from "react-router-dom";
import "./Category.css"

export const CategoryCard = ({category}) => {
        return (
        <div className="card">
            <div className="card-content">
              <picture>
                <img src={'/images/icons8-category-48.png'} alt="Category Icon" />
              </picture>
              <h3><span className="category__title">{category.type}
              <Link to={`/projects/${category.id}`}>
              <button>View Projects</button>
            </Link>
              </span></h3>
            </div>
        </div>
        )
      }
