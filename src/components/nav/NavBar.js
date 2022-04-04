import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const history = useNavigate()

    const handleLogout = () => {
        clearUser();
        history('/');
    }
  
    return (
      <nav className="navbar">
        <div className="navbar__title">
                <Link className="navbar__link" to="/">Progress Pal</Link>
        </div>
        <button className="hamburger"
            onClick={() => {
            setIsNavExpanded(!isNavExpanded);
        }}>        
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
            >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
            </svg>
        </button>
        <div className={
          isNavExpanded ? "navigation__menu expanded" : "navigation__menu"
          }
        >
            <ul>
            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to="/projects">My Projects</Link>
                  </li>
                : null}
            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to="/categories">Categories</Link>
                </li>
                : null}
            {isAuthenticated
               ? <li className="navbar__item">
                    <Link className="navbar__link" to="/affirmations">Affirmations</Link>
                </li>
                : null}
            {isAuthenticated
               ? <li className="navbar__item">
                    <Link className="navbar__link" to="/users">Users</Link>
                </li>
                : null}
            {isAuthenticated 
               ? <li className="navbar__item">
                     <a className="navbar__link" onClick={handleLogout}>Logout</a>
                </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li>}
            </ul>
        </div>
    </nav>  
  )
}
