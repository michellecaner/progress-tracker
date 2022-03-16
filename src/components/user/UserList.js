import React, { useState, useEffect } from 'react';
import { UserCard } from './UserCard';
import { getAllUsers, getUserById } from '../../modules/UserManager';

export const UserList = () => {

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return getAllUsers().then(usersFromAPI => {
      setUsers(usersFromAPI)
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container-cards">
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
};