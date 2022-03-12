import React from "react"
import { Link } from "react-router-dom"


export const NavBar = (props) => {
  return (
    
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      
      <ul className="nav nav-pills nav-fill">
        
        <li className="nav-item">
          <Link className="nav-link" to="/"><img src={'/images/image2vector.svg'} alt="home" /></Link>
            </li>
            
        <li className="nav-item">
          <Link className="nav-link" to="/projects">My Projects</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/categories">Catagories</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/complete-projects">Complete Projects</Link>
        </li>
      </ul>
    </nav>
  )
}
