import React from "react"
import "./User.css"

export const UserCard = ({user}) => {
    return (
    <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/icons8-profile-64.png'} alt="Profile Icon" />
          </picture>
          <h3><span className="user__name">{user.name}
          </span></h3>
          <div className="user__email">{user.email}</div>
        </div>
    </div>
  )
}
