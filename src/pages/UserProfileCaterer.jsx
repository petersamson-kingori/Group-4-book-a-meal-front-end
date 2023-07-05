import React from "react";
import { useAuth } from "./auth";
import { useNavigate, useLocation } from "react-router-dom";
import MenuOptionForm from "./MenuOptionForm"; 
import CatererMenu from "./CatererMenu";


const UserProfileCaterer = () => {
  const { caterer, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/login_caterer";

  console.log("Caterer:", caterer.username);

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
    <div style={{ margin: "30px" }}>
      <h2 style={{ marginBottom: "10px" }}>
        {caterer ? `Dashboard: ${caterer.business_name}!` : "Welcome, Caterer. Please Log in!"}
      </h2>
      {caterer && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <h4 style={{ margin: "0", padding: "0" }}>Welcome back, {caterer.username}</h4>
          <button
            onClick={handleLogoutClick}
            style={{
              backgroundColor: "#34BB78",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            Logout
          </button>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {caterer && (
          <>
            <MenuOptionForm />
            <CatererMenu />
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfileCaterer;