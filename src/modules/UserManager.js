const remoteURL = "http://localhost:8088"

export const getUserById = (userId) => {
  //be sure your projects have good data and related to a user
  return fetch(`${remoteURL}/users/${userId}`)
  .then(res => res.json())
}

export const getAllUsers = () => {
  return fetch(`${remoteURL}/users`)
  .then(res => res.json())
}