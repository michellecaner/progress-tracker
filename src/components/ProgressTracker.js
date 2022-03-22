import React, {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./ProgressTracker.css"



export const ProgressTracker = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("project_user") !== null)

  const setAuthUser = (user) => {
      sessionStorage.setItem("project_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("project_user") !== null)
  }

  const clearUser = () => {
      sessionStorage.clear();
      setIsAuthenticated(sessionStorage.getItem("project_user") !== null)
  }

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
      <ApplicationViews 
          setAuthUser={setAuthUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
      />
    </>
  )
}