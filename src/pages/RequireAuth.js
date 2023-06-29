import React, { useEffect, useState } from 'react';
import { useAuth } from './auth';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const location = useLocation();
  const auth = useAuth();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (auth.isAuthenticated()) {
      fetch('https://group-4-book-a-meal-api.onrender.com/api/v1/profile', {
        headers: {
          Authorization: `Bearer ${auth.getToken()}` // Include the authentication token
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('Failed to fetch user details');
        })
        .then(data => {
          setCurrentUser(data.user);
        })
        .catch(error => {
          console.error(error);
          auth.logout(); // Log out the user if an error occurs during fetch
        });
    }
  }, [auth]);

  if (!currentUser) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
}
