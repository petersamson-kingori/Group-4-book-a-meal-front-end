import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Login from "../pages/Login";

// const navigate = useNavigate();
function ProtectedRoutes() {
const navigate = useNavigate();
const [currentUser, setCurrentUser] = useState('');
// Auth login
useEffect(()=>{
  fetch("https://food-api-ivzo.onrender.com/auth")
  .then(res =>{
    if(res.ok){
      res.json().then(user => setCurrentUser(user))
    }
  })
},[])

// if(!currentUser) return <Login setCurrentUser={setCurrentUser} />
if(currentUser) {
  navigate("/reviews")
}
  return <Login setCurrentUser={setCurrentUser} />
};
export default ProtectedRoutes;
// if(currentUser) 
//   {navigate("/contact")}
// else  
//   return <Login setCurrentUser={setCurrentUser} />