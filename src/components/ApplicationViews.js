import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { Home } from "./Home"
import { ProjectList } from './project/ProjectList'
import { CategoryList } from './category/CategoryList'
import { AffirmationList } from "./affirmation/AffirmationList"
import { UserList } from "./user/UserList"
import { ProjectDetail } from "./project/ProjectDetail"
import { ProjectForm } from "./project/ProjectForm"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  const setAuthUser = (user) => {
    sessionStorage.setItem("project_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("project_user") !== null)
  }
  return (
    <>
      <Routes>

        <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />

        <Route exact path="/register" element={<Register />} />

        <Route exact path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />   

        <Route exact path="/projects" element={
          <PrivateRoute> 
            <ProjectList />
          </PrivateRoute>  
        } />

        <Route path="/projects/:projectId" element={
          <PrivateRoute> 
            <ProjectDetail />
          </PrivateRoute>    
        } />

        <Route path="/projects/create" element={
          <PrivateRoute> 
            <ProjectForm />
          </PrivateRoute>    
        } />

        <Route path="/categories" element={
          <PrivateRoute> 
            <CategoryList />
          </PrivateRoute>  
        } />

        <Route path="/categories/:categoryId" element={
          <PrivateRoute> 
            <ProjectList />
          </PrivateRoute>  
        } />

        <Route path="/affirmations" element={
          <PrivateRoute> 
            <AffirmationList />
          </PrivateRoute>  
        } />

        <Route path="/users" element={
          <PrivateRoute> 
            <UserList />
          </PrivateRoute>  
        } />
      </Routes>    
    </>
  )
}
