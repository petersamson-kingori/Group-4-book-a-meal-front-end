import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [caterer, setCaterer] = useState(null);

  function login(user) {
    setUser(user);
  }

  function login_caterer(caterer) {
    setCaterer(caterer);
  }


  function logout() {
    setUser(null);
  }

   function logout_caterer(caterer) {
    setCaterer(null);
  }

  function isAuthenticated() {
    return user !== null; // Update this condition based on your authentication logic
  }

  return (
    <AuthContext.Provider value={{ user, caterer, login_caterer, login, logout, logout_caterer, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
