const remoteURL = "http://localhost:8088"

export const getAffirmationById = (AffirmationId) => {
  //be sure your affirmations have good data and related to a user and category
  return fetch(`${remoteURL}/affirmations/${AffirmationId}`)
  .then(res => res.json())
}

export const getAllAffirmations = () => {
  return fetch(`${remoteURL}/affirmations`)
  .then(res => res.json())
}