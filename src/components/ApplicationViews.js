import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { Home } from "./Home"
import { ProjectCard } from './project/ProjectCard.js'


export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  const setAuthUser = (user) => {
    sessionStorage.setItem("nutshell_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }
  return (
    <>
      <Routes>

        <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />

        <Route exact path="/register" element={<Register />} />

        <Route exact path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />   

        <Route path="/projects" element={
          <PrivateRoute> 
            <ProjectCard />
          </PrivateRoute>  
        } />

      </Routes>    
    </>
  )
}
