import React from "react";
import { useAuth } from "./auth";
import { useNavigate, useLocation } from "react-router-dom";
import MenuOptionForm from "./MenuOptionForm"; 
import CatererMenu from "./catererMenu";


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
    <>
    <div style={{ display: "flex", alignItems: "center" }}>
    {caterer ? (
      <>
        <h2 style={{ margin: "30px 30px 30px 250px", padding: "30px" }}>
          Welcome Back, {caterer.business_name}!
        </h2>
        <h1>Administrator:{caterer.username}</h1>
    
          
      </>
      
    ) : (
      <h2 style={{ margin: "30px 30px 30px 150px", padding: "30px" }}>
        Welcome, Caterer. Please Log in!
      </h2>
    )}
    
    {caterer ? (
      <>
         
  
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
      <h2 style={{ margin: "30px 30px 30px 150px", padding: "30px" }}>
        Welcome, Caterer. Please Log in!
      </h2>
    )}
   
  

  </div>
  <div style={{ margin: "30px 30px 30px 150px", padding: "30px" }}>
  {caterer ? (
      <>
       <MenuOptionForm />
       
      </>
    ):(
      <>
      </>
    )}
  </div>
  <CatererMenu  />
  </>
  );
};

export default UserProfileCaterer;
