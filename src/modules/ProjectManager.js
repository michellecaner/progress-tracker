const remoteURL = "http://localhost:8088"

export const getProjectById = (projectId) => {
  //be sure your projects have good data and related to a user and category
  return fetch(`${remoteURL}/projects/${projectId}?_expand=user&_expand=category`)
  .then(res => res.json())
}

export const getAllProjects = () => {
  return fetch(`${remoteURL}/projects?_expand=category`)
  .then(res => res.json())
}

export const deleteProject = (id) => {
  return fetch(`${remoteURL}/projects/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addProject = (newProject) => {
  return fetch(`${remoteURL}/projects`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newProject)
  }).then(response => response.json())
}