import React from "react";
import { useAuth } from "./auth";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/user-profile.css";

const UserProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/login";

  console.log("User:", user);

  function handleLogoutClick() {
    fetch("https://crave-masters-front-end.onrender.com/api/v1/logout", { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          logout();
          navigate(redirectPath, { replace: true });
        }
      });
  }

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button className="logout__btn" onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : (
        <h2>Welcome, Guest Please Log in!</h2>
      )}
      {/* Additional content for the user profile */}
    </div>
  );
};

export default UserProfile;
