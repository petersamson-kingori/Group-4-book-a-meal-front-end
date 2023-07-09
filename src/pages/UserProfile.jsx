import React from 'react';
import { useAuth } from './auth';
import { useNavigate, useLocation } from 'react-router-dom';
import Menu from './Menu';

const UserProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/login';

  console.log('User:', user);

  function handleLogoutClick() {
    fetch('https://crave-masters-front-end.onrender.com/api/v1/logout', { method: 'DELETE' }).then((res) => {
      if (res.ok) {
        logout();
        navigate(redirectPath, { replace: true });
      }
    });
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',  margin: '0 250px' }}>
        <h2>Welcome, {user ? user.username : 'Guest'}</h2>
        {user && (
          <button
            onClick={handleLogoutClick}
            style={{
              backgroundColor: '#34BB78',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
            }}
          >
            Logout
          </button>
        )}
      </div>
      {user && (
        <div style={{ margin: '0 250px' }}>
          <Menu user={user} /> {/* Pass user object as a prop */}
        </div>
      )}
      {/* Additional content for the user profile */}
    </div>
  );
};

export default UserProfile;
