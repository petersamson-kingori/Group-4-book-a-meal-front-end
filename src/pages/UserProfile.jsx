import React from "react";
import { useAuth } from "./auth";
import { useNavigate, useLocation } from "react-router-dom";

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
    <div style={{ display: "flex", alignItems: "center" }}>
    {user ? (
      <>
        <h2 style={{ margin: "30px 30px 30px 250px", padding: "30px" }}>
          Welcome, {user.username}!
        </h2>
        <button
          onClick={handleLogoutClick}
          style={{
            display: "inline-block",
            marginRight: "30px",
            backgroundColor: "#34BB78",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Logout
        </button>
      </>
    ) : (
      <h2 style={{ margin: "30px 30px 30px 250px", padding: "30px" }}>
        Welcome, Guest. Please Log in!
      </h2>
    )}
    {/* Additional content for the user profile */}
  </div>
  );
};

export default UserProfile;
