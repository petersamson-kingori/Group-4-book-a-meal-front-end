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
        {caterer ? `Dashboard: ${caterer.business_name}` : "Welcome, Caterer. Please Log in!"}
      </h2>
      {caterer && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <h4 style={{ margin: "100", padding: "0" }}>Welcome back, {caterer.username}!</h4>
          <button
            onClick={handleLogoutClick}
            style={{
              backgroundColor: '#5CD88F', // Change the background color to a lighter shade of green
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none', // Remove the button outline
              marginRight: '5px',
            }}
          >
            Logout
          </button>
        </div>
      )}
<div style={{ 
  display: "flex",
  justifyContent: "space-around",
  margin: "30px 10px",
}}>
  {caterer && (
    <>
      <MenuOptionForm style={{marginRight: '10px'}} />
      <CatererMenu style={{marginRight: '10px', marginLeft: '10px'}} />
      <Orders style={{marginLeft: '10px'}} />
    </>
  )}
</div>
    </div>
  );
};

export default UserProfileCaterer;